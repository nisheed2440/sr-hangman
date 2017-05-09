import { FirebaseService } from '../firebase.service';
import { LoginComponent } from './login.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

@NgModule({
    declarations:[
        LoginComponent
    ],
    imports:[
        CommonModule,
        RouterModule.forChild([
            { path: '', component: LoginComponent }
        ])
    ],
    entryComponents:[
        LoginComponent
    ],
    exports: [
        CommonModule
    ],
    providers:[FirebaseService]
})
export class LoginModule {}