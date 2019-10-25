import { Component, ViewEncapsulation } from '@angular/core';

export interface IHeaderLinks {
  label: string;
  title: string;
  url: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [ './header.component.scss' ],
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent {

  headerLinks: IHeaderLinks[] = [
    {
      label: 'all works',
      title: 'Read more about my works',
      url: '/',
    },
    {
      label: 'about',
      title: 'Read more about myself',
      url: '/about',
    },
    {
      label: 'articles',
      title: 'View my articles in Medium.com',
      url: 'https://medium.com/@brunoalvesfernandes/highlights',
    },
    {
      label: 'hello@brunowork.co',
      title: 'let\'s get in touch!',
      url: 'mailto:hello@brunowork.co',
    }
  ];

  headerMobileLinks: IHeaderLinks[] = [
    {
      label: 'about',
      title: 'Read more about myself',
      url: '/about',
    },
    {
      label: 'articles',
      title: 'View my articles in Medium.com',
      url: 'https://medium.com/@brunoalvesfernandes/highlights',
    },
    {
      label: 'LinkedIn',
      title: 'see my LinkedIn profile',
      url: '',
    },
    {
      label: 'Dribble',
      title: 'see my Dribble profile',
      url: '',
    }
  ];
}
