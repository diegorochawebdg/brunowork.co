import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ArticleComponent } from './article.component';

@NgModule({
  declarations: [
    ArticleComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ArticleComponent,
  ],
})
export class ArticleModule { }
