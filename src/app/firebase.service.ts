import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import * as firebase from 'firebase';

@Injectable()
export class FirebaseService {
  firebase = firebase;
  fireApp;
  constructor() {
    this.fireApp = this.firebase.initializeApp(environment.firbaseConfig);
    this.firebase.auth().onAuthStateChanged(firebaseUser => {
      console.log(firebaseUser);
    });
    console.log(this.firebase.auth().currentUser);
  }
  loginWithGoogle() {
    let provider = new this.firebase.auth.GoogleAuthProvider();
    this.firebase.auth().signInWithPopup(provider).then(function (result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // ...
    }).catch((error: any) => {
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
  loginWithGithub() {
    let provider = new this.firebase.auth.GithubAuthProvider();
    this.firebase.auth().signInWithPopup(provider).then(function (result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // ...
    }).catch((error: any) => {
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
  logout(){
    this.firebase.auth().signOut().then(function() {
      // Sign-out successful.
      console.log('signed out successfully!');
    }).catch(function(error) {
      // An error happened.
      console.log(error);
    });
  }
}
