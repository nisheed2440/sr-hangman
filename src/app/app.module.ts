import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { AmpDashModule } from 'amp-dash';

/**
 * This is the main application module where all the components, modules and providers are declared.
 */
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AmpDashModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
