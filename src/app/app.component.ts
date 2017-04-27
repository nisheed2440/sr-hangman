import { Component, ViewChild, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'sr-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  host:{
    class:'db absolute top-0 left-0 bottom-0 right-0 ma'
  },
})
export class AppComponent implements OnInit {
  @ViewChild('particlesScreen') particlesScreen: ElementRef
  title = 'SAPIENT RAZORFISH_';
  ngOnInit(){
    
    let particlesScreenId;

    if(this.particlesScreen){
       particlesScreenId = this.particlesScreen.nativeElement.id;
    }

    if(this.pJSExists() && particlesScreenId) {
      window['particlesJS'](particlesScreenId, {
          'particles': {
            'number': {
              'value': 160,
              'density':{
                'enable': true,
                'value_area': 600
              }
            },
            'color': {
              'value': ['#FFFFFF']
            },
            'shape': {
              'type':'circle'
            },
            'size': {
              'value': 3,
              'random': true
            },
            'opacity': {
              'anim':{
                enable: true,
                speed: 1,
                opacity_min: 0
              },
              'value':1,
              'random': true
            },
            'line_linked': {
              'enable': false
            },
            'move':{
              'enable': true,
              'direction': 'none',
              'random': true,
              'straight':false,
              'speed':1,
              'out_mode':'out',
              'attract':{
                'enable': false
              }

            }
          },
          'interactivity': {
            'events':{
              'onhover':{
                enable:false
              },
              'onclick':{
                enable: false
              }
            }
          },
          'retina_detect':true
        });
      }
  
  }

  pJSExists(): boolean {
    return window['pJS'] ? true : false;
  }
}
