import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ArticleModule } from 'src/app/components/article/article.module';

import { routes } from './home.routing';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    ArticleModule,
    RouterModule.forChild(routes),
    HttpClientModule,
  ],
})
export class HomeModule { }
