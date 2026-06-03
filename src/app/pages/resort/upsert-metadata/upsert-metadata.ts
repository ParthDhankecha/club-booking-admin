import { Component, ElementRef, EventEmitter, Input, Output, SimpleChanges, ViewChild, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { AppSrc } from '@src/app/shared/directives/src';
import { FileDrop } from '@src/app/shared/directives/file-drop';

import { ApiFacadeService } from '@src/app/services/api-facade-service';
import { CoreFacadeService } from '@src/app/core/services/core-facade-service';
import { EToasterType } from '@src/app/models/utils.model';
import { IResponse } from '@src/app/models/http-response.model';

const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;


@Component({
  selector: 'app-upsert-metadata',
  imports: [
    ReactiveFormsModule,
    AppSrc,
    FileDrop
  ],
  templateUrl: './upsert-metadata.html',
  styleUrl: './upsert-metadata.scss',
})
export class UpsertMetadata {
  private readonly _fb = inject(FormBuilder);
  private readonly _apiFs = inject(ApiFacadeService);
  private readonly _coreService = inject(CoreFacadeService);


  @ViewChild('fileInput') private fileInput?: ElementRef<HTMLInputElement>;

  @Input('data') data: any = null;
  @Output('upsert') upsert: EventEmitter<any> = new EventEmitter<any>();


  protected isReqAlive = false;
  protected pickedImageFile: File | null = null;
  protected pickedImagePreview: string | null = null;
  protected markCurrentImageForDelete = false;


  protected form = this._fb.group({
    slug: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(80), Validators.pattern(SLUG_PATTERN)]],
    title: ['', [Validators.required, Validators.maxLength(200)]],
    description: ['', [Validators.required, Validators.maxLength(800)]],
  });


  protected ngOnChanges(changes: SimpleChanges): void {
    if (!changes['data']) return;

    const metadata = this.data?.metadata ?? {};
    this.form.reset({
      slug: metadata?.slug ?? '',
      title: metadata?.title ?? '',
      description: metadata?.description ?? '',
    });

    this.pickedImageFile = null;
    this.pickedImagePreview = null;
    this.markCurrentImageForDelete = false;
    if (this.fileInput?.nativeElement) {
      this.fileInput.nativeElement.value = '';
    }
  }


  protected onCloseOrCancel(): void {
    this.upsert.emit(null);
  }

  protected get currentImageUrl(): string {
    if (this.markCurrentImageForDelete) return '';
    return this.data?.metadata?.image || '';
  }

  protected get selectedImagePreview(): string {
    return this.pickedImagePreview || '';
  }

  protected openFilePicker(): void {
    this.fileInput?.nativeElement.click();
  }

  protected onPickImage(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) return;
    this._setImageFile(file);
  }

  private _setImageFile(file: File): void {
    if (!file.type?.startsWith('image/')) {
      this._coreService.utils.showToaster(EToasterType.Warning, 'Please drop a valid image file');
      return;
    }
    this.pickedImageFile = file;
    this.markCurrentImageForDelete = false;
    const reader = new FileReader();
    reader.onload = () => {
      this.pickedImagePreview = typeof reader.result === 'string' ? reader.result : null;
    };
    reader.readAsDataURL(file);
  }

  protected onImageDrop(files: FileList): void {
    const file = files?.[0];
    if (!file) return;
    this._setImageFile(file);
  }

  protected removeImage(): void {
    this.pickedImageFile = null;
    this.pickedImagePreview = null;
    this.markCurrentImageForDelete = !!this.data?.metadata?.image;
    if (this.fileInput?.nativeElement) {
      this.fileInput.nativeElement.value = '';
    }
  }


  protected onSubmit(): void {
    if (!this.data?._id || this.isReqAlive) return;

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const slug = (this.form.value.slug || '').trim();
    const title = (this.form.value.title || '').trim();
    const description = (this.form.value.description || '').trim();

    const prev = this.data?.metadata ?? {};
    const prevSlug = (prev.slug || '').trim();
    const prevTitle = (prev.title || '').trim();
    const prevDescription = (prev.description || '').trim();

    const didTextChange = slug !== prevSlug || title !== prevTitle || description !== prevDescription;
    const didImageChange = !!this.pickedImageFile || this.markCurrentImageForDelete;
    if (!didTextChange && !didImageChange) {
      this._coreService.utils.showToaster(EToasterType.Warning, 'No changes to save');
      return;
    }

    const body = new FormData();
    body.append('slug', slug);
    body.append('title', title);
    body.append('description', description);
    if (this.pickedImageFile) {
      body.append('image', this.pickedImageFile);
    } else if (this.markCurrentImageForDelete) {
      body.append('image', 'delete');
    }

    this.isReqAlive = true;
    this._apiFs.resort.updateMetadata(this.data._id, body).subscribe({
      next: (res: IResponse) => {
        this.isReqAlive = false;
        if (res.code === 'UPDATED') {
          this._coreService.utils.showToaster(EToasterType.Success, 'Metadata updated successfully');
          this.upsert.emit(res.data);
        }
      },
      error: (err: any) => {
        this.isReqAlive = false;
        const msg = err?.error?.message || 'Something went wrong. Please try again later';
        this._coreService.utils.showToaster(EToasterType.Danger, msg);
      },
    });
  }
}