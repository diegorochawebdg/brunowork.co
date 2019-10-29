import { Component } from '@angular/core';
import { PreloaderService } from 'src/app/services/preloader.service';

@Component({
  selector: 'app-preloader',
  templateUrl: './preloader.component.html',
  styleUrls: ['./preloader.component.scss']
})
export class PreloaderComponent {

  /**
   * Indica se o preloader está visível
   */
  isPreloaderVisible: boolean;

  /**
   * @internal
   */
  constructor(
    private preloaderService: PreloaderService,
  ) {
    this.preloaderService.$isPreloaderVisible.subscribe(res => {
      this.isPreloaderVisible = res;
    });
  }
}
