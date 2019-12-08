import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SafePipe } from 'src/app/pipes/safe.pipe';

@NgModule({
  declarations: [
    SafePipe,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    SafePipe,
  ]
})
export class SharedModule { }
