// tslint:disable: max-line-length
import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { TinySliderInstance, tns } from 'node_modules/tiny-slider/src/tiny-slider';
import { PreloaderService } from 'src/app/services/preloader.service';

import { PrismicService } from '../../services/prismic.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.scss' ],
})
export class HomeComponent implements OnInit, OnDestroy {

  /**
   * O conteúdo dos artigos a serem exibidos
   */
  content: object;

  /**
   * A instância do slider
   */
  slider: TinySliderInstance;

  /**
   * Define se o dispositivo é iOS ou não
   */
  isIosDevice = false;

  /**
   * @internal 
   */
  constructor(
    private prismicService: PrismicService,
    private preloaderService: PreloaderService,
    private element: ElementRef,
  ) { }

  /**
   * Método de construção do slider de cards
   */
  createSlider(element: HTMLElement) {
    const sliderConfig: object = {
      container: element,
      center: true,
      items: 1,
      controls: true,
      controlsPosition: 'bottom',
      controlsText: [ 'Previous Slide', 'Next Slide' ],
      nav: false,
      autoHeight: true,
    };

    this.slider = tns(sliderConfig);
  }

  /**
   * @internal
   */
  ngOnInit() {
    this.isIosDevice = /iPad|iPhone|iPod/.test(navigator.platform) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    this.prismicService
      .getPrismicContent('/', 'articles-list')
      .subscribe(res => {
        this.content = res['results'][0]['data'];
        setTimeout(() => {
          this.element.nativeElement
            .querySelectorAll('.article__slider-list')
            .forEach((slider: HTMLElement) => {
              this.createSlider(slider);
            });
          this.preloaderService.hidePreloader();
        }, 2000);
      });
  }

  /**
   * @internal
   */
  ngOnDestroy() {
    this.slider.destroy();
  }
}
