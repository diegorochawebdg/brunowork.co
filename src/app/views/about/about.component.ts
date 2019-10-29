import { Component, OnInit } from '@angular/core';
import { NgxMasonryOptions } from 'ngx-masonry';
import { PreloaderService } from 'src/app/services/preloader.service';
import { PrismicService } from 'src/app/services/prismic.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: [ './about.component.scss' ],
})
export class AboutComponent implements OnInit {

  /**
   * O conteúdo dos artigos a serem exibidos
   */
  content?: object;

  /**
   * Opções da biblioteca Masonry
   */
  masonryOptions: NgxMasonryOptions = {
    gutter: 40,
  };

  /**
   * @internal
   */
  constructor(
    private prismicService: PrismicService,
    private preloaderService: PreloaderService,
  ) { }

  /**
   * @internal
   */
  ngOnInit() {
    this.prismicService
      .getPrismicContent('/about', 'about_page')
      .subscribe(res => {
        this.content = res['results'][0]['data'];
        setTimeout(() => {
          this.preloaderService.hidePreloader();
        }, 1000);
      });
  }

}
