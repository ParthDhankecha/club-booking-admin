import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray, CdkDragHandle } from '@angular/cdk/drag-drop';

import { ModalLayer } from '@src/app/shared/components/modal-layer/modal-layer';
import { RegisterModalLayer } from '@src/app/shared/directives/register-modal-layer';

import { AppSrc } from '@src/app/shared/directives/src';
import { CoreFacadeService } from '@src/app/core/services/core-facade-service';
import { ApiFacadeService } from '@src/app/services/api-facade-service';
import { EToasterType } from '@src/app/models/utils.model';
import { ROUTES } from '@src/app/constants/app-routes';


@Component({
  selector: 'app-upsert-images',
  imports: [
    ReactiveFormsModule,
    AppSrc,
    ModalLayer,
    RegisterModalLayer,
    CdkDrag,
    CdkDropList,
    CdkDragHandle
  ],
  templateUrl: './upsert-images.html',
  styleUrl: './upsert-images.scss',
})
export class UpsertImages {
  // Inject Services
  protected _fb: FormBuilder = inject(FormBuilder);
  protected _coreService: CoreFacadeService = inject(CoreFacadeService);
  protected _apiFs: ApiFacadeService = inject(ApiFacadeService);
  private readonly _router: Router = inject(Router);

  constructor(
    private readonly _route: ActivatedRoute,
  ) {
    const assetId = this._route.snapshot.params['id'];
    if (assetId) {
      this.getAssetDetails(assetId);
    }
  }


  protected assetData!: any;
  protected uploadIndexes: Record<number, boolean> = {};
  protected form: FormGroup = this._fb.group({
    images: this._fb.array([])
  });


  protected deleteImageModalId: string = 'delete-image-modal';
  protected imageData: any = null;


  protected goBack(): void {
    this._router.navigate([ROUTES.getFullRoute(ROUTES.ASSET.BASE)]);
  }


  protected get f_images(): FormArray {
    return this.form.get('images') as FormArray;
  }


  private getAssetDetails(assetId: string): void {
    this._apiFs.asset.getPartialDetails(assetId, { images: true }).subscribe({
      next: (res: any) => {
        if (res.code === 'OK') {
          this.assetData = res.data;
          this.setImagesInForm();
        }
      },
      error: (err: any) => {
        const msg = err?.error?.message || 'Something went wrong. Please try again later';
        this._coreService.utils.showToaster(EToasterType.Danger, msg);
      }
    });
  }


  private setImagesInForm(): void {
    this.f_images.clear();
    const images = this.assetData?.images || [];
    if (images.length === 0) {
      this.f_images.push(this._fb.group({
        id: [this.f_images.length + 1, []],
        file: [null, []],
        url: [null, [Validators.required]],
        alt: ['', [Validators.maxLength(255)]],
      }));
      return;
    }
    // add existing images to form
    for (const image of images) {
      this.f_images.push(this._fb.group({
        id: [this.f_images.length + 1, []],
        file: [null, []],
        url: [image.url, [Validators.required]],
        alt: [image.alt, [Validators.maxLength(255)]],
      }));
    }
  }


  protected onAddImage(): void {
    if (this.f_images.value.length >= 10) {
      this._coreService.utils.showToaster(EToasterType.Warning, 'You can only add up to 10 images');
      return;
    }
    this.f_images.push(this._fb.group({
      id: [this.f_images.length + 1, []],
      file: [null, []],
      url: [null, [Validators.required]],
      alt: ['', [Validators.maxLength(255)]],
    }));
  }

  protected onChangeImage(event: Event, index: number): void {
    const fileInput = event.target as HTMLInputElement;
    const file = fileInput.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const state = this.f_images.at(index).value;
        this.f_images.at(index).patchValue({
          file: file,
          url: reader.result,
        });
        this.uploadImage(index, { state, fileEvent: event });
      };
      reader.readAsDataURL(file);
    }
  }

  private uploadImage(index: number, { state, fileEvent }: { state: any, fileEvent: Event }): void {
    if (!this.assetData?._id || this.uploadIndexes[index]) return;

    this.uploadIndexes[index] = true;
    const image = this.f_images.at(index).value;

    const formData = new FormData();
    formData.append('image', image.file);
    formData.append('alt', image.alt ?? '');
    formData.append('index', index.toString());

    this._apiFs.asset.upsertImage(this.assetData._id, formData).subscribe({
      next: (res: any) => {
        if (res.code === 'OK') {
          this.uploadIndexes[index] = false;
          const location = res.data?.location;
          if (location) {
            this.f_images.at(index).patchValue({
              file: null,
              url: location,
            });
          }
        }
      },
      error: (err: any) => {
        this.uploadIndexes[index] = false;
        const msg = err?.error?.message || 'Something went wrong. Please try again later';
        this._coreService.utils.showToaster(EToasterType.Danger, msg);
        this.f_images.at(index).patchValue(state);
        (fileEvent.target as HTMLInputElement).value = '';
      }
    });
  }


  protected onDrop(event: CdkDragDrop<any>): void {
    moveItemInArray(this.f_images.controls, event.previousIndex, event.currentIndex);
    this.f_images.updateValueAndValidity();
  }


  protected onDeleteImage(index: number): void {
    this.imageData = this.f_images.at(index).value;
    if (!this.assetData?.images?.some((image: any) => image.url === this.imageData.url)) {
      this.f_images.removeAt(index);
      return;
    }
    this.imageData.index = index;
    this._coreService.modal.open(this.deleteImageModalId);
  }

  protected onDeleteImageCancel(): void {
    this._coreService.modal.close(this.deleteImageModalId);
    this.imageData = null;
  }

  protected isDeleteReqAlive: boolean = false;
  protected onConfirmDeleteImage(): void {
    if (!this.imageData || this.isDeleteReqAlive) return;

    this.isDeleteReqAlive = true;
    const body = {
      url: this.imageData.url,
      index: this.imageData.index
    };
    this._apiFs.asset.removeImage(this.assetData._id, body).subscribe({
      next: (res: any) => {
        this.isDeleteReqAlive = false;
        if (res.code === 'UPDATED') {
          this._coreService.utils.showToaster(EToasterType.Success, 'Image deleted successfully');
          this.onDeleteImageCancel();
          this.f_images.removeAt(this.imageData.index);
        }
      },
      error: (err: any) => {
        this.isDeleteReqAlive = false;
        const msg = err?.error?.message || 'Something went wrong. Please try again later';
        this._coreService.utils.showToaster(EToasterType.Danger, msg);
      }
    });
  }


  protected isReqAlive: boolean = false;
  protected onSubmit(): void {
    if (this.isReqAlive) return;
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      const hasPlaceholderImage = this.f_images.value.some((image: any) => !image.url);
      if (hasPlaceholderImage) {
        const msg = this.f_images.value.length > 1 ? 'Please remove extra images.' : 'Please add at least one image.';
        this._coreService.utils.showToaster(EToasterType.Warning, msg);
      }
      return;
    }
    if (this.f_images.value.length === 0) {
      this._coreService.utils.showToaster(EToasterType.Warning, 'At least one image is required to save the changes.');
      return;
    }

    this.isReqAlive = true;
    const body: any = {
      images: this.f_images.value.map((image: any) => ({
        url: image.url,
        alt: image.alt
      }))
    };
    this._apiFs.asset.update(this.assetData._id, body).subscribe({
      next: (res: any) => {
        this.isReqAlive = false;
        if (res.code === 'UPDATED') {
          this._coreService.utils.showToaster(EToasterType.Success, 'Images updated successfully');
        }
      },
      error: (err: any) => {
        this.isReqAlive = false;
        const msg = err?.error?.message || 'Something went wrong. Please try again later';
        this._coreService.utils.showToaster(EToasterType.Danger, msg);
      }
    });
  }
}