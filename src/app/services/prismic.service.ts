import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, mergeMap } from 'rxjs/operators';

@Injectable()
export class PrismicService {

  prismicApiEndpoint = 'https://brunowork-co.cdn.prismic.io/api/v2';
  masterRef: string;

  constructor(
    private http: HttpClient,
  ) { }

  getPrismicContent(pageUrl: string, pageType: string) {
    return this.http.get(this.prismicApiEndpoint)
      .pipe(
        map(res => {
          return this.masterRef = res['refs'].find((ref: object) => ref['id'] === 'master')['ref'];
        }),
      )
      .pipe(
        mergeMap(() => {
          return this.http.get(`${this.prismicApiEndpoint}/documents/search`, {
            params: {
              ref: this.masterRef,
              q: `[[at(my.${pageType}.url, "${[ pageUrl ]}")]]`,
            },
          });
        }),
      )
  }

}
