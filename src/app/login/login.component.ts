import { FirebaseService } from '../firebase.service';
import { Component, OnInit } from '@angular/core';

interface LoginType {
  type:string,
  icon:string
}

@Component({
  selector: 'sr-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  host:{
    class:'db w-100 h-100 overflow-y-auto'
  }
})
export class LoginComponent implements OnInit {
  loginTypes:LoginType[] = [
    { type:'google',icon:'google'},
    { type:'github',icon:'github'}
  ];
  constructor(private firebaseService: FirebaseService) {
  }
  ngOnInit() {
  }
  loginHandler(loginType: LoginType, index: number): void {
    console.log(loginType);
    switch (loginType.type) {
      case 'google':
        this.firebaseService.loginWithGoogle();
        break;
      case 'github':
        this.firebaseService.loginWithGithub();
        break;
    }
  }

  logoutHandler(){
    this.firebaseService.logout();
  }
}
