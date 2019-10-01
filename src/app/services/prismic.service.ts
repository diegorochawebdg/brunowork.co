import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Prismic from 'prismic-javascript';

import { Config } from '../utils/prismic-config';

@Injectable()
export class PrismicService {

  constructor(private http: HttpClient) {}

  buildContext() {
    const options = {};
    return Prismic.api(Config.apiEndpoint, {accessToken: Config.accessToken})
      .then((api) => {
        return {
          api,
          endpoint: Config.apiEndpoint,
          accessToken: Config.accessToken,
          linkResolver: Config.linkResolver,
          toolbar: this.toolbar,
        };
        // } as Context;
      })
      .catch(e => console.log(`Error during connection to your Prismic API: ${e}`));
  }

  validateOnboarding() {
    const infos = this.getRepositoryInfos();
    const headers = new Headers({ 'Content-Type': 'application/json' });

    if(infos.isConfigured) {
      this.http.post(`${infos.repoURL}/app/settings/onboarding/run`, headers)
      .subscribe(
        null,
        (err) => console.log(`Cannot access your repository, check your api endpoint: ${err}`)
      );
    }
  }

  getRepositoryInfos() {
    const repoRegexp = /^(https?:\/\/([-\w]+)\.[a-z]+\.(io|dev))\/api(\/v2)?$/;
    const [_, repoURL, name] = Config.apiEndpoint.match(repoRegexp);
    const isConfigured = name !== 'brunowork-co';
    return { repoURL, name, isConfigured };
  }

  toolbar(api) {
    const maybeCurrentExperiment = api.currentExperiment();
    if (maybeCurrentExperiment) {
      window['PrismicToolbar'].startExperiment(maybeCurrentExperiment.googleId());
    }
    window['PrismicToolbar'].setup(Config.apiEndpoint);
  }

  preview(token) {
    return this.buildContext()
    .then(ctx => {
      return ctx['api'].previewSession(token, ctx['linkResolver'], '/').then((url) => {
        return {
          cookieName: Prismic.previewCookie,
          token: token,
          redirectURL: url
        };
        // } as Preview;
      });
    });
  }
}
