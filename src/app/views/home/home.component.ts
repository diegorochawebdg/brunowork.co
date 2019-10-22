// tslint:disable: max-line-length
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PrismicService } from '../../services/prismic.service';

// import 'rxjs/add/observable/fromPromise';

export interface IArticle {
  /**
   * O título do artigo
   */
  title: string;
  /**
   * O subtítulo do artigo
   */
  subtitle: string;
  /**
   * O texto do artigo
   */
  text: string;
  /**
   * A citação do artigo
   */
  quote: string;
  /**
   * A lista de tarefas desempenhadas no projeto
   */
  role: string[];
  /**
   * A lista de pessoas que trabalharam no projeto
   */
  design_team: string[];
  /**
   * Lista de imagens a serem exibidas no slide
   */
  images: string[];
  /**
   * url para o case
   */
  link: string;
}

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
      .getPrismicContent('/')
      .subscribe(res => {
        this.content = res['results'][0]['data'];
        console.log('this.content => ', this.content);
      });
  }

}
