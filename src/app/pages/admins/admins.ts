import { Component, inject } from '@angular/core';
import { DatePipe } from '@angular/common';

import { ModalLayer } from '@src/app/shared/components/modal-layer/modal-layer';
import { RegisterModalLayer } from '@src/app/shared/directives/register-modal-layer';
import { CommonDropdown } from '@src/app/shared/components/common-dropdown/common-dropdown';
import { UpsertAdmin } from './upsert-admin/upsert-admin';

import { IResponse } from '@src/app/models/http-response.model';
import { ApiFacadeService } from '@src/app/services/api-facade-service';
import { CoreFacadeService } from '@src/app/core/services/core-facade-service';
import { EToasterType } from '@src/app/models/utils.model';


@Component({
  selector: 'app-admins',
  imports: [
    ModalLayer,
    RegisterModalLayer,
    CommonDropdown,
    UpsertAdmin,
    DatePipe,
  ],
  templateUrl: './admins.html',
  styleUrl: './admins.scss',
})
export class Admins {
  private readonly _apiFs = inject(ApiFacadeService);
  protected readonly _coreService = inject(CoreFacadeService);

  protected readonly upsertAdminModalId = 'upsert-admin-modal';
  protected readonly deleteAdminModalId = 'delete-admin-modal';
  protected readonly changeAdminStatusModalId = 'change-admin-status-modal';

  protected admins: any[] = [];
  protected filteredAdmins: any[] = [];
  protected workspaces: any[] = [];
  protected selectedWorkspace: any = null;
  protected adminData: any = null;
  protected isReqAlive = false;
  protected loading = false;


  ngOnInit(): void {
    this.loadWorkspaces();
    this.loadList();
  }


  private loadWorkspaces(): void {
    this._apiFs.workspace.list().subscribe({
      next: (res: IResponse) => {
        if (res.code === 'OK' && Array.isArray(res.data)) {
          this.workspaces = res.data;
        } else {
          this.workspaces = [];
        }
      },
      error: (err: unknown) => {
        console.log('Error while fetch workspaces', err);
      },
    });
  }

  private loadList(): void {
    this.loading = true;
    this._apiFs.adminUser.list().subscribe({
      next: (res: IResponse) => {
        if (res.code === 'OK' && Array.isArray(res.data)) {
          this.admins = res.data;
          this.filteredAdmins = res.data;
        } else {
          this.admins = [];
          this.filteredAdmins = [];
        }
        this.loading = false;
      },
      error: (err: unknown) => {
        this.loading = false;
        console.log('Error while fetch admins', err);
      },
    });
  }

  protected getWorkspaceTitle(admin: any): string {
    const workspace = admin?.workspaceId;
    if (!workspace) return '-';
    return typeof workspace === 'object' ? (workspace.title ?? '-') : '-';
  }

  protected onWorkspaceFilterSelected(workspace: any): void {
    this.selectedWorkspace = workspace || null;
    if (this.selectedWorkspace?._id) {
      this.filteredAdmins = this.admins.filter(({ workspaceId }) => {
        return (workspaceId?._id ?? workspaceId) === this.selectedWorkspace._id;
      });
    } else {
      this.filteredAdmins = this.admins;
    }
  }

  protected onClearFilters(): void {
    if (!this.selectedWorkspace?._id) return;

    this.selectedWorkspace = null;
    this.filteredAdmins = this.admins;
  }

  protected onCreateNew(): void {
    this.adminData = null;
    this._coreService.modal.open(this.upsertAdminModalId);
  }

  protected onEditAdmin(admin: any): void {
    this.adminData = admin;
    this._coreService.modal.open(this.upsertAdminModalId);
  }

  protected onUpsertAdmin(event: any): void {
    this.adminData = null;
    if (event) {
      const index = this.admins.findIndex((item) => item._id === event._id);
      if (index !== -1) {
        this.admins[index] = {
          ...this.admins[index],
          ...event,
        };
      } else {
        this.admins = [event, ...this.admins];
        this.onWorkspaceFilterSelected(this.selectedWorkspace);
      }
    }
    this._coreService.modal.close(this.upsertAdminModalId);
  }

  protected onDeleteAdmin(admin: any): void {
    this.adminData = admin;
    this._coreService.modal.open(this.deleteAdminModalId);
  }

  protected onDeleteAdminCancel(): void {
    this.adminData = null;
    this._coreService.modal.close(this.deleteAdminModalId);
  }

  protected onConfirmDeleteAdmin(): void {
    if (!this.adminData || this.isReqAlive) return;

    this.isReqAlive = true;
    this._apiFs.adminUser.delete(this.adminData._id).subscribe({
      next: (res: IResponse) => {
        this.isReqAlive = false;
        if (res.code === 'DELETED') {
          this._coreService.utils.showToaster(EToasterType.Success, 'Admin deleted successfully');
          this.admins = this.admins.filter((item) => item._id !== this.adminData._id);
          this.onDeleteAdminCancel();
        } else {
          const msg = res.message || 'Something went wrong. Please try again later';
          this._coreService.utils.showToaster(EToasterType.Danger, msg);
          this.onDeleteAdminCancel();
        }
      },
      error: (err: any) => {
        this.isReqAlive = false;
        const msg = err?.error?.message || 'Something went wrong. Please try again later';
        this._coreService.utils.showToaster(EToasterType.Danger, msg);
      },
    });
  }


  protected onChangeAdminStatus(admin: any): void {
    this.adminData = admin;
    this._coreService.modal.open(this.changeAdminStatusModalId);
  }

  protected onChangeAdminStatusCancel(): void {
    this.adminData = null;
    this._coreService.modal.close(this.changeAdminStatusModalId);
  }

  protected onConfirmChangeAdminStatus(): void {
    if (!this.adminData || this.isReqAlive) return;

    this.isReqAlive = true;
    this._apiFs.adminUser.update(this.adminData._id, { isActive: !this.adminData.isActive }).subscribe({
      next: (res: IResponse) => {
        this.isReqAlive = false;
        if (res.code === 'UPDATED') {
          this._coreService.utils.showToaster(EToasterType.Success, 'Admin status changed successfully');
          const index = this.admins.findIndex((item) => item._id === this.adminData._id);
          if (index !== -1) {
            this.admins[index] = res.data;
          } else {
            this.loadList();
          }
          this.onChangeAdminStatusCancel();
        } else {
          const msg = res.message || 'Something went wrong. Please try again later';
          this._coreService.utils.showToaster(EToasterType.Danger, msg);
          this.onChangeAdminStatusCancel();
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