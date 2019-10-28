import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MobileMenuService {

  isMobileMenuOpened = false;
  $isMobileMenuOpened: Subject<boolean> = new Subject<boolean>();

  openMobileMenu() {
    this.$isMobileMenuOpened.next(true);
  }
  
  closeMobileMenu() {
    this.$isMobileMenuOpened.next(false);
  }
  
  toggleMobileMenu() {
    this.$isMobileMenuOpened.next(!this.isMobileMenuOpened);
  }

  constructor() { 
    this.$isMobileMenuOpened.subscribe(value => {
      this.isMobileMenuOpened = value;
    });
  }
}
