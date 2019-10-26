import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgxMasonryModule } from 'ngx-masonry';

import { AboutComponent } from './about.component';
import { routes } from './about.routing';

@NgModule({
  declarations: [
    AboutComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgxMasonryModule,
  ],
})
export class AboutModule { }
