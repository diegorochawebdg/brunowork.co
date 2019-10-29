import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PreloaderService {

  /**
   * Indica se o preloader está visível
   */
  isPreloaderVisible = false;
  /**
   * Detecta mudanças na variável do preloader
   */
  $isPreloaderVisible: Subject<boolean> = new Subject<boolean>();

  /**
   * @internal
   */
  constructor() { 
    this.$isPreloaderVisible.subscribe(res => {
      this.isPreloaderVisible = res;
    });
  }

  /**
   * Exibe o preloader
   */
  showPreloader() {
    this.$isPreloaderVisible.next(true);
  }
  
  /**
   * Esconde o preloader
   */
  hidePreloader() {
    this.$isPreloaderVisible.next(false);
  }
}
