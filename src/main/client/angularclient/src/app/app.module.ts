import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

import {MatToolbarModule} from "@angular/material/toolbar";
import { HomeTabGroupComponent } from './components/home-tab-group/home-tab-group.component';
import { MatTabsModule } from "@angular/material/tabs";
import { MatListModule } from "@angular/material/list";
import {OccupantsListComponent} from "./components/occupants-list/occupants-list.component";
import {OccupantServiceService} from "./services/occupant-service.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    HomeTabGroupComponent,
    OccupantsListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatListModule,
    MatTabsModule
  ],
  providers: [OccupantServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
