import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GoogleMap {


  getEmbedMapUrl(mapUrl: string = ''): string {
    const raw = mapUrl?.trim();
    if (!raw) return '';
    const iframeSrcMatch = raw.match(/src\s*=\s*["']([^"']+)["']/i);
    return iframeSrcMatch ? iframeSrcMatch[1].trim() : raw;
  }

  toSearchUrl(query: string): string {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query || "")}`
  }

  getMapUrlForOpen(mapUrl: string, fallbackQuery: string = ''): string {
    const fallbackUrl: string = this.toSearchUrl(fallbackQuery);
    const raw = mapUrl?.trim();
    if (!raw) return fallbackUrl;

    try {
      const url = new URL(raw);
      if (!url.hostname.includes("google.")) return raw; // non-google URL: just open it

      // Direct open format (sometimes used with embeds too)
      const q = url.searchParams.get("q");
      if (q) {
        const placeId = url.searchParams.get("place_id");
        const open = new URL("https://www.google.com/maps/search/");
        open.searchParams.set("api", "1");
        open.searchParams.set("query", q);
        if (placeId) open.searchParams.set("query_place_id", placeId);
        return open.toString();
      }

      // Embed format: .../maps/embed?pb=... (pb often contains !2d{lng}!3d{lat})
      const pb = url.searchParams.get("pb");
      if (pb) {
        const decoded = decodeURIComponent(pb);
        const coord = decoded.match(/!2d(-?\d+(?:\.\d+)?)!3d(-?\d+(?:\.\d+)?)/);
        if (coord) return this.toSearchUrl(`${coord[2]},${coord[1]}`); // lat,lng

        const name = decoded.match(/!2s([^!]+)/)?.[1];
        if (name) return this.toSearchUrl(name);
      }

      // Last fallback: open the same path without /embed
      if (url.pathname.includes("/maps/embed")) {
        return `https://www.google.com${url.pathname.replace("/maps/embed", "/maps")}${url.search}${url.hash}`;
      }

      return raw;
    } catch {
      return fallbackUrl;
    }
  }
}