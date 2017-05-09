import { HangmanComponent } from './hangman.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

@NgModule({
    declarations:[
        HangmanComponent
    ],
    imports:[
        CommonModule,
        RouterModule.forChild([
            { path: '', component: HangmanComponent }
        ])
    ],
    entryComponents:[
        HangmanComponent
    ],
    exports: [
        CommonModule
    ]
})
export class HangmanModule {}