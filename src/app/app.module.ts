import { BrowserModule } from '@angular/platform-browser';
import {ApplicationRef, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { EtudiantCreateComponent } from './candidature/etudiant-create.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  MatButtonModule,
  MatDatepickerModule,
  MatIconModule,
  MatInputModule,
  MatNativeDateModule,
  MatStepperModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HeaderComponent} from './header/header.component';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from "./app-routing.module";


@NgModule({
  declarations: [
    AppComponent,
    EtudiantCreateComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatStepperModule, MatInputModule, MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    FormsModule,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule,
    AppRoutingModule




  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
