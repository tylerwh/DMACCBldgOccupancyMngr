import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

import {MatToolbarModule} from "@angular/material/toolbar";
import { HomeTabGroupComponent } from './components/home-tab-group/home-tab-group.component';
import { MatTabsModule } from "@angular/material/tabs";
import { MatListModule } from "@angular/material/list";

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    HomeTabGroupComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatListModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
