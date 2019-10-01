// tslint:disable: max-line-length
import { Component, OnInit, OnDestroy, AfterViewChecked, SimpleChanges } from '@angular/core';
import { IContext } from '../../interfaces/context.interface';
import { PrismicService } from '../../services/prismic.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { map, flatMap } from 'rxjs/operators';
import PrismicDOM from 'prismic-dom';
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
  articles: IArticle[] = [
    {
      title: 'Carupi App & Web Plataform',
      subtitle: 'Carupi is a startup that make users sell their cars without leaving home.',
      text: 'In 2019 we started a new project for a PA CA Startup. Carupi promisse to reinvent the experience of sell cars withou leaning home. In 2019 we started a new project for a PA CA Startup. Carupi promisse to reinvent the experience of sell cars withou leaning home. In 2019 we started a new project for a PA CA Startup. Carupi promisse to reinvent the experience of sell cars withou leaning home.',
      quote: 'In 2019 we started a new project for a PA CA Startup. Carupi promisse to reinvent the experience of sell cars withou leaning home.',
      role: [
        'Product Designer',
        'Team Coordinator',
      ],
      design_team: [
        'Gustavo Herrero',
        'Evergton Silva',
        'David Novaes',
      ],
      images: [
        '',
      ],
      link: 'http://google.com',
    },
    {
      title: 'Carupi App & Web Plataform',
      subtitle: 'Carupi is a startup that make users sell their cars without leaving home.',
      text: 'In 2019 we started a new project for a PA CA Startup. Carupi promisse to reinvent the experience of sell cars withou leaning home. In 2019 we started a new project for a PA CA Startup. Carupi promisse to reinvent the experience of sell cars withou leaning home. In 2019 we started a new project for a PA CA Startup. Carupi promisse to reinvent the experience of sell cars withou leaning home.',
      quote: 'In 2019 we started a new project for a PA CA Startup. Carupi promisse to reinvent the experience of sell cars withou leaning home.',
      role: [
        'Product Designer',
        'Team Coordinator',
      ],
      design_team: [
        'Gustavo Herrero',
        'Evergton Silva',
        'David Novaes',
      ],
      images: [
        '',
      ],
      link: 'http://google.com',
    },
    {
      title: 'Carupi App & Web Plataform',
      subtitle: 'Carupi is a startup that make users sell their cars without leaving home.',
      text: 'In 2019 we started a new project for a PA CA Startup. Carupi promisse to reinvent the experience of sell cars withou leaning home. In 2019 we started a new project for a PA CA Startup. Carupi promisse to reinvent the experience of sell cars withou leaning home. In 2019 we started a new project for a PA CA Startup. Carupi promisse to reinvent the experience of sell cars withou leaning home.',
      quote: 'In 2019 we started a new project for a PA CA Startup. Carupi promisse to reinvent the experience of sell cars withou leaning home.',
      role: [
        'Product Designer',
        'Team Coordinator',
      ],
      design_team: [
        'Gustavo Herrero',
        'Evergton Silva',
        'David Novaes',
      ],
      images: [
        '',
      ],
      link: 'http://google.com',
    },
    {
      title: 'Carupi App & Web Plataform',
      subtitle: 'Carupi is a startup that make users sell their cars without leaving home.',
      text: 'In 2019 we started a new project for a PA CA Startup. Carupi promisse to reinvent the experience of sell cars withou leaning home. In 2019 we started a new project for a PA CA Startup. Carupi promisse to reinvent the experience of sell cars withou leaning home. In 2019 we started a new project for a PA CA Startup. Carupi promisse to reinvent the experience of sell cars withou leaning home.',
      quote: 'In 2019 we started a new project for a PA CA Startup. Carupi promisse to reinvent the experience of sell cars withou leaning home.',
      role: [
        'Product Designer',
        'Team Coordinator',
      ],
      design_team: [
        'Gustavo Herrero',
        'Evergton Silva',
        'David Novaes',
      ],
      images: [
        '',
      ],
      link: 'http://google.com',
    },
    // {
    //   title: '',
    //   subtitle: '',
    //   text: '',
    //   quote: '',
    //   role: [
    //     '',
    //   ],
    //   design_team: [
    //     '',
    //   ],
    //   images: [
    //     '',
    //   ],
    //   link: '',
    // },
  ];

  private routeStream: Subscription;
  PrismicDOM: Object = PrismicDOM;

  ctx?: IContext;
  pageContent?: any;
  toolbar?: boolean = false;

  constructor(private prismic: PrismicService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.routeStream = this.route.params
      .pipe(
        map((params: any) => params['uid'])
      )
      // .pipe(
      //   flatMap(uid => Observable.fromPromise(this.prismic.buildContext()).map(ctx => [uid, ctx]))
      // )
      .subscribe(([uid, ctx]) => {
        console.log('ctx', ctx);

        this.ctx = ctx;
        this.fetchPage(uid);
      });
  }

  ngOnDestroy() {
    this.routeStream.unsubscribe();
  }

  ngAfterViewChecked() {
    if (this.ctx && (!this.toolbar)) {
      this.prismic.toolbar(this.ctx.api);
      this.toolbar = true;
    }
  }

  fetchPage(pageUID) {
    this.ctx.api.getByUID('page', pageUID, {})
      .then(data => {
        this.toolbar = false;
        this.pageContent = data;
      })
      .catch(e => console.log(e));
  }

}
