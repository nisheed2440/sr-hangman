import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sr-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css'],
  host:{
    class: 'db w-100 h-100 overflow-y-auto bg-white'
  }
})
export class LeaderboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
