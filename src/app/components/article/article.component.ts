import { AfterViewInit, Component, ElementRef, Input } from '@angular/core';
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

  /**
   * O array de conteúdos do artigo
   */
  @Input()
  content;

  /**
   * O array de conteúdos do artigo
   */
  @Input()
  index: number;

  /**
   * @internal
   */
  constructor(
    private element: ElementRef,
  ) { }

  /**
   * Método de construção do slider de cards
   */
  createSlider(element: HTMLElement) {
    const sliderConfig: object = {
      container: element,
      center: true,
      loop: false,
      items: 1,
      controls: true,
      controlsPosition: 'bottom',
      controlsText: [ 'Previous Slide', 'Next Slide' ],
      nav: false,
      autoHeight: true,
    };

    this.slider = tns(sliderConfig);
  }

  previousSlide() {
    console.log('works');
  }

  /**
   * @internal
   */
  ngAfterViewInit() {
    this.element.nativeElement
      .querySelectorAll('.article__slider-list')
      .forEach((slider: HTMLElement) => {
        this.createSlider(slider);
      });
  }
}
