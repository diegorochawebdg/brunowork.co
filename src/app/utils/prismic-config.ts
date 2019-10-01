import { IPrismicConfiguration } from '../interfaces/prismic-config.interface';

// import { Injectable } from '@angular/core';

export const Config: IPrismicConfiguration = {
  apiEndpoint: 'https://brunowork-co.prismic.io/api/v2',
  linkResolver(doc) {
    return '/';
  }
};
