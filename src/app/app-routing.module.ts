import { AboutComponent } from './about/about.component';
import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

const appRoutes: Routes = [{
    path: 'login',
    loadChildren: './login/login.module#LoginModule'
  },
  {
    path: 'hangman',
    loadChildren:'./hangman/hangman.module#HangmanModule'
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'leader-board',
    loadChildren: './leaderboard/leaderboard.module#LeaderboardModule'
  },
  {
    path: 'not-found',
    loadChildren:'./not-found/not-found.module#NotFoundModule'
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'not-found',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
