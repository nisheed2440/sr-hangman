import { Class } from '@angular/core/core';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

interface Word {
  letters: string[];
}

interface Hangman {
  words: Word[];
  hint: string;
}

@Component({
  selector: 'sr-hangman',
  templateUrl: './hangman.component.html',
  styleUrls: ['./hangman.component.scss'],
  host: {
    class: 'flex flex-column w-100 h-100'
  }
})
export class HangmanComponent implements OnInit {
  @ViewChild('hangmanLetter') hangmanLetter: ElementRef;
  hangman: Hangman = {
    words: [
      {
        letters: ['w','*','*', '*', '*' , 'l', '*', 's']
      }
    ],
    hint: ''
  };
  showFocusMsg: boolean;
  constructor() { }

  ngOnInit() {
    this.inputFocusHandler();
  }

  inputFocusHandler() {
    console.log('Input Focus!');
    this.hangmanLetter.nativeElement.focus();
    this.showFocusMsg = false;
  }

  inputBlurHandler() {
    console.log('Input  Blur!');
    this.showFocusMsg = true;
  }


  keyupHandler(e) {
    let inputValue = this.hangmanLetter.nativeElement.value;
    if(inputValue.match(/^[A-Za-z]+$/)) {
      // Post to server
      console.log(inputValue);
    }
    this.hangmanLetter.nativeElement.value = '';
  }
}
