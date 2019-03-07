import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';

@Component({
  selector : 'app-root',
  templateUrl : './app.component.html',
  styleUrls : [
    './app.component.less'
  ],
  encapsulation : ViewEncapsulation.None
})

export class AppComponent {
  constructor(
    private router : Router
  ) {

  }
}
