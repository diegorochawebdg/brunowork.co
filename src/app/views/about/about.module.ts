import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AboutComponent } from './about.component';
import { RouterModule } from '@angular/router';
import { routes } from './about.routing';

@NgModule({
  declarations: [
    AboutComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
})
export class AboutModule { }
