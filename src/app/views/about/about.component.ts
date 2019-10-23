import { Component, OnInit } from '@angular/core';
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
  content: object;

  constructor(
    private prismicService: PrismicService,
  ) { }

  /**
   * @internal
   */
  ngOnInit() {
    this.prismicService
      .getPrismicContent('/about')
      .subscribe(res => {
        this.content = res['results'][0]['data'];
      });
  }

}
