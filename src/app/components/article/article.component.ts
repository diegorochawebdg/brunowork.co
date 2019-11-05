import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { TinySliderInstance, tns } from 'node_modules/tiny-slider/src/tiny-slider';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: [ './article.component.scss' ],
  encapsulation: ViewEncapsulation.None,
})
export class ArticleComponent implements AfterViewInit, OnInit {
  /**
   * A instância do slider
   */
  slider: TinySliderInstance;

  /**
   * Define se o dispositivo é iOS ou não
   */
  isIosDevice = false;

  /**
   * O array de conteúdos do artigo
   */
  @Input()
  content: any;

  /**
   * O número do artigo
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
      items: 1,
      controls: true,
      controlsPosition: 'bottom',
      controlsText: [ 'Previous Slide', 'Next Slide' ],
      nav: false,
      autoHeight: true,
    };

    this.slider = tns(sliderConfig);
  }
  
  destroySlider() {
    this.slider.destroy();
  }
  
  refreshSlider() {
    this.slider.refresh();
  }

  ngOnInit() {
    this.isIosDevice = /iPad|iPhone|iPod/.test(navigator.platform) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
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

    setTimeout(() => {
      this.refreshSlider();
    }, 2000);
  }

  /**
   * @internal
   */
  ngOnDestroy() {
    console.log(this.slider);
    this.destroySlider();
  }
}
