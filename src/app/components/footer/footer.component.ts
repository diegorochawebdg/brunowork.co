import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: [ './footer.component.scss' ],
  encapsulation: ViewEncapsulation.None,
})
export class FooterComponent implements OnInit {

  /**
   * Retorna o ano atual
   */
  year = new Date().getFullYear();

  constructor() { }

  ngOnInit() {
  }

}
