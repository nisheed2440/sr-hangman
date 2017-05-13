import { OnDestroy } from '@angular/core/core';
import { FirebaseService } from '../firebase.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sr-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss'],
  host:{
    class: 'db w-100 h-100 overflow-y-auto bg-white'
  }
})
export class LeaderboardComponent implements OnInit, OnDestroy {
  private leaderboard;
  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {
    this.leaderboard = this.firebaseService.getLeaderBoard().subscribe((data) => {
      console.log(data);
    });
  }

  ngOnDestroy() {
    this.leaderboard.unsubscribe();
  }

}
