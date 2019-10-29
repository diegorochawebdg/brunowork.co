import { Component, Renderer2 } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { PreloaderService } from './services/preloader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ],
})
export class AppComponent { 
  previousUrl: string;
 
  constructor(
    private renderer: Renderer2, 
    private router: Router,
    private preloaderService: PreloaderService,
  ) {
    this.router.events
      .subscribe((event) => {
        if (event instanceof NavigationStart) {
          this.preloaderService.showPreloader();
          if (this.previousUrl) {
            this.renderer.removeClass(document.body, this.previousUrl);
          }
          let currentUrlSlug = event.url.slice(1)
          if (currentUrlSlug) {
            this.renderer.addClass(document.body, currentUrlSlug);
          }
          this.previousUrl = currentUrlSlug;
        }
      });
 
  }
}
