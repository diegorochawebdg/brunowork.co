import { PrismicConfiguration } from '../interfaces/prismic-config.interface';

// import { Injectable } from '@angular/core';

export const Config: PrismicConfiguration = {
  apiEndpoint: 'https://your-repo-name.prismic.io/api/v2',
  linkResolver(doc) {
    return '/';
  }
};
