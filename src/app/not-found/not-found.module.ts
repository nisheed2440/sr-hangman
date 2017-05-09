import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found.component';
import { NgModule } from '@angular/core';

@NgModule({
    declarations:[
        NotFoundComponent
    ],
    imports:[
        CommonModule,
        RouterModule.forChild([
            { path: '', component: NotFoundComponent }
        ])
    ],
    entryComponents:[
        NotFoundComponent
    ],
    exports: [
        CommonModule
    ]
})
export class NotFoundModule {}