import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import * as firebase from 'firebase';

@Injectable()
export class FirebaseService {
  private firebase: any = firebase;
  private fireApp: any;
  private dbRef: any;
  private userStateUnsubscribe: any;
  private userObservable: Observable <any> ;
  private leaderboardDbRef: any;
  private leaderboardObservable: Observable <any> ;
  private auth: any;
  constructor() {
    this.fireApp = this.firebase.initializeApp(environment.firbaseConfig);
    this.auth = this.firebase.auth();
    this.dbRef = this.firebase.database().ref('js-jargons');
    this.leaderboardDbRef = this.dbRef.child('leaderboard');
    this.userObservable = Observable.create((observer) => {
      this.userStateUnsubscribe = this.firebase.auth().onAuthStateChanged((user) => {
        observer.next(user);
      });
      return () => {
        this.userStateUnsubscribe();
      };
    });

    this.leaderboardObservable = Observable.create((observer) => {
      this.leaderboardDbRef.limitToFirst(1).on('value', function(snapshot) {
        observer.next(snapshot.val());
      });
      return () => {
        this.leaderboardDbRef.off('value');
      };
    });
  }
  loginWithGoogle() {
    let provider = new this.firebase.auth.GoogleAuthProvider();
    this.signIn(provider);
  }
  loginWithGithub() {
    let provider = new this.firebase.auth.GithubAuthProvider();
    this.signIn(provider);
  }
  signIn(provider: any) {
     this.auth.signInWithPopup(provider).then(function(result) {
      // This gives you a GitHub Access Token. You can use it to access the GitHub API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      console.log(token,user);
      // ...
    }).catch(function(error: any) {
      console.log(error);
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
  }
  logout() {
    this.firebase.auth().signOut().then(function() {
      // Sign-out successful.
      console.log('signed out successfully!');
    }).catch(function(error) {
      // An error happened.
      console.log(error);
    });
  }

  getUser(): Observable<any> {
    return this.userObservable;
  }

  getLeaderBoard(): Observable<any> {
    return this.leaderboardObservable;
  }
}
