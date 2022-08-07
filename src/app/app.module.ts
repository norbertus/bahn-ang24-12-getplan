import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// addedn nn needed for issueForm
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DepartureService } from './shared/departure.service';

import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from '@angular/common/http';

import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DepartureListComponent } from './components/departure-list/departure-list.component';
import { TestdepListComponent } from './components/testdep-list/testdep-list.component';
import { TimetableconstListComponent } from './components/timetableconst-list/timetableconst-list.component';
import { AddTestdepComponent } from './components/add-testdep/add-testdep.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DepartureListComponent,
    TestdepListComponent,
    TimetableconstListComponent,
    AddTestdepComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    MatTabsModule,
    BrowserAnimationsModule
  ],
  providers: [DepartureService],
  bootstrap: [AppComponent]
})
export class AppModule { }
