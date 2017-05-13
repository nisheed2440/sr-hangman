import { cleanUpControl } from '@angular/forms/src/directives/shared';
import { Component, ViewChild, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'sr-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('particlesScreen') particlesScreen: ElementRef
  title = 'SAPIENT RAZORFISH_';
  ngOnInit() {

    let particlesScreenId;

    if (this.particlesScreen) {
      particlesScreenId = this.particlesScreen.nativeElement.id;
    }

    if (this.pJSExists() && particlesScreenId) {
      window['particlesJS'].load(particlesScreenId, 'assets/json/particlesjs-config.json');
    }

  }

  pJSExists(): boolean {
    return window['pJS'] ? true : false;
  }
}
