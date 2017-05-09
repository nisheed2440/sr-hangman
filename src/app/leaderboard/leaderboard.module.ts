import { LeaderboardComponent } from './leaderboard.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

@NgModule({
    declarations:[
        LeaderboardComponent
    ],
    imports:[
        CommonModule,
        RouterModule.forChild([
            { path: '', component: LeaderboardComponent }
        ])
    ],
    entryComponents:[
        LeaderboardComponent
    ],
    exports: [
        CommonModule
    ]
})
export class LeaderboardModule {}