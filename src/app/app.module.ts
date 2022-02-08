import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SectionAComponent } from './components/section-a/section-a.component';
import { SectionBComponent } from './components/section-b/section-b.component';
import { SectionCComponent } from './components/section-c/section-c.component';
import { HomeComponent } from './components/home/home.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import { SectionC1Component } from './components/section-c1/section-c1.component';
import { SectionC2Component } from './components/section-c2/section-c2.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SectionAComponent,
    SectionBComponent,
    SectionCComponent,
    HomeComponent,
    BreadcrumbComponent,
    SectionC1Component,
    SectionC2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
