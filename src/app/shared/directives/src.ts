import { Directive, HostBinding, HostListener, inject, Input, SimpleChanges } from '@angular/core';

import { CoreFacadeService } from '@src/app/core/services/core-facade-service';


@Directive({
  selector: '[appSrc]'
})
export class AppSrc {
  // Inject Services
  protected readonly _coreService = inject(CoreFacadeService);
  protected imgBasePath: string = this._coreService.appConfig.configData.s3BaseUrl;
  protected publicPath: string = this._coreService.appConfig.configData.serverUrl;
  private readonly base64Regex = /^data:image\/[a-zA-Z]+;base64,/;


  @Input('appSrc') appSrc: string = '';// actual path
  @Input('basePath') basePath: string = this.imgBasePath;// base path
  @Input('defaultSrc') defaultSrc: string = 'images/placeholder.png';// default path

  @HostBinding('attr.src') src!: string;

  @HostListener('error')
  protected onError(): void {
    this.src = this.defaultSrc;
  }


  ngOnChanges(changes: SimpleChanges) {
    if (changes['appSrc'] || changes['basePath'] || changes['defaultSrc']) {
      if (this.appSrc && (this.appSrc.startsWith('http') || this.base64Regex.test(this.appSrc))) {
        this.src = this.appSrc;
        return;
      }
      if (!this.appSrc) {
        // this.src = `${this.publicPath.replace(/\/$/, '')}/${(this.defaultSrc).replace(/^\//, '')}`;
        this.src = this.defaultSrc;
        return;
      }
      this.src = `${this.basePath.replace(/\/$/, '')}/${(this.appSrc).replace(/^\//, '')}`;
    }
  }
}