// tslint:disable: max-line-length
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PrismicService } from '../../services/prismic.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.scss' ],
})
export class HomeComponent implements OnInit {

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
      .getPrismicContent('/', 'articles-list')
      .subscribe(res => {
        this.content = res['results'][0]['data'];
      });
  }

}
