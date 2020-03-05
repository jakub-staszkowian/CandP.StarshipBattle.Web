import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StarshipsModule } from './starships/starships.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StarshipsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
