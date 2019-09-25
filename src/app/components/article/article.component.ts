import { AfterViewInit, Component } from '@angular/core';
import { TinySliderInstance, tns } from 'node_modules/tiny-slider/src/tiny-slider';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: [ './article.component.scss' ],
})
export class ArticleComponent implements AfterViewInit {

  /**
   * A instância do slider
   */
  slider: TinySliderInstance;

  constructor() { }

  /**
   * Método de construção do slider de cards
   */
  createSlider() {
    const sliderConfig: object = {
      container: '.article__slider-list',
      center: true,
      loop: false,
      items: 1,
      controls: true,
      controlsPosition: 'bottom',
      controlsText: [ 'Previous Slide', 'Next Slide' ],
      nav: false,
    };

    this.slider = tns(sliderConfig);
  }

  ngAfterViewInit() {
    this.createSlider();
  }

}
