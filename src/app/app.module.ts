import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {NavigationComponent} from "../navigation/navigation.component";
import {LiveCardComponent} from "../live-card/live-card.component";
import {VideoCardComponent} from "../video-card/video-card.component";

@NgModule({
    declarations: [
        AppComponent,
        NavigationComponent,
        LiveCardComponent,
        VideoCardComponent
    ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
