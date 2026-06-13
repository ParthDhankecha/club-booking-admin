import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class Icon {

  private _sanitizeSlug(slug: string): string {
    return String(slug)
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .trim().toLowerCase()
      .replace(/&/g, 'and')
      .replace(/['"]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  }


  getIconPath = (slug: string): string => {
    const _slug = this._sanitizeSlug(slug);
    return `icons/${_slug}.svg`;
  };

  getFacilitiesStatsIconPath = (slug: string): string => {
    const _slug = this._sanitizeSlug(slug);
    return `icons/facilities-stats/${_slug}.svg`;
  };
}