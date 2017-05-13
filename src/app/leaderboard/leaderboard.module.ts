import { FlexLayoutModule } from '@angular/flex-layout';
import { FirebaseService } from '../firebase.service';
import { LeaderboardComponent } from './leaderboard.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

@NgModule({
    declarations:[
        LeaderboardComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild([
            { path: '', component: LeaderboardComponent }
        ]),
        FlexLayoutModule
    ],
    entryComponents: [
        LeaderboardComponent
    ],
    exports: [
        CommonModule
    ],
    providers: [FirebaseService]
})
export class LeaderboardModule {}
