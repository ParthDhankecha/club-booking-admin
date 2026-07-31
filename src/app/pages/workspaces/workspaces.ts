import { Component, inject } from '@angular/core';
import { DatePipe } from '@angular/common';

import { ModalLayer } from '@src/app/shared/components/modal-layer/modal-layer';
import { RegisterModalLayer } from '@src/app/shared/directives/register-modal-layer';
import { UpsertWorkspace } from './upsert-workspace/upsert-workspace';

import { IResponse } from '@src/app/models/http-response.model';
import { ApiFacadeService } from '@src/app/services/api-facade-service';
import { CoreFacadeService } from '@src/app/core/services/core-facade-service';
import { EToasterType } from '@src/app/models/utils.model';


@Component({
  selector: 'app-workspaces',
  imports: [
    ModalLayer,
    RegisterModalLayer,
    UpsertWorkspace,
    DatePipe,
  ],
  templateUrl: './workspaces.html',
  styleUrl: './workspaces.scss',
})
export class Workspaces {
  private readonly _apiFs = inject(ApiFacadeService);
  protected readonly _coreService = inject(CoreFacadeService);

  protected readonly upsertWorkspaceModalId = 'upsert-workspace-modal';
  protected readonly deleteWorkspaceModalId = 'delete-workspace-modal';

  protected workspaces: any[] = [];
  protected workspaceData: any = null;
  protected isReqAlive = false;
  protected loading = false;


  ngOnInit(): void {
    this.loadList();
  }


  private loadList(): void {
    this.loading = true;
    this._apiFs.workspace.list().subscribe({
      next: (res: IResponse) => {
        if (res.code === 'OK' && Array.isArray(res.data)) {
          this.workspaces = res.data;
        } else {
          this.workspaces = [];
        }
        this.loading = false;
      },
      error: (err: unknown) => {
        this.loading = false;
        console.log('Error while fetch workspaces', err);
      },
    });
  }

  protected onCreateNew(): void {
    this.workspaceData = null;
    this._coreService.modal.open(this.upsertWorkspaceModalId);
  }

  protected onEditWorkspace(workspace: any): void {
    this.workspaceData = workspace;
    this._coreService.modal.open(this.upsertWorkspaceModalId);
  }

  protected onUpsertWorkspace(event: any): void {
    this.workspaceData = null;
    if (event) {
      const index = this.workspaces.findIndex((item) => item._id === event._id);
      if (index !== -1) {
        this.workspaces[index] = event;
      } else {
        this.workspaces = [event, ...this.workspaces];
      }
    }
    this._coreService.modal.close(this.upsertWorkspaceModalId);
  }

  protected onDeleteWorkspace(workspace: any): void {
    this.workspaceData = workspace;
    this._coreService.modal.open(this.deleteWorkspaceModalId);
  }

  protected onDeleteWorkspaceCancel(): void {
    this.workspaceData = null;
    this._coreService.modal.close(this.deleteWorkspaceModalId);
  }

  protected onConfirmDeleteWorkspace(): void {
    if (!this.workspaceData || this.isReqAlive) return;

    this.isReqAlive = true;
    this._apiFs.workspace.delete(this.workspaceData._id).subscribe({
      next: (res: IResponse) => {
        this.isReqAlive = false;
        if (res.code === 'DELETED') {
          this._coreService.utils.showToaster(EToasterType.Success, 'Workspace deleted successfully');
          this.workspaces = this.workspaces.filter((item) => item._id !== this.workspaceData._id);
          this.onDeleteWorkspaceCancel();
        } else {
          const msg = res.message || 'Something went wrong. Please try again later';
          this._coreService.utils.showToaster(EToasterType.Danger, msg);
          this.onDeleteWorkspaceCancel();
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