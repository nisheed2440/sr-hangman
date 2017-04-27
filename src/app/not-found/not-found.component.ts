import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sr-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
  host:{
    class:'db w-100 h-100 overflow-y-auto'
  }
})
export class NotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
