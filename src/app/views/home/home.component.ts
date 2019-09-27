// tslint:disable: max-line-length
import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
