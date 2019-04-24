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
import {DemandeListComponent} from "./demande/demande-list/demande-list.component";
import {DemandeInscriptionCreateComponent} from "./demande/demande-inscription-create/demande-inscription-create.component";
import {DemandeReleveNotesCreateComponent} from "./demande/demande-releve-notes-create/demande-releve-notes-create.component";
import {DemandeScolariteCreateComponent} from "./demande/demande-scolarite-create/demande-scolarite-create.component";
import {DemandeScolariteListComponent} from "./demande/demande-scolarite-list/demande-scolarite-list.component";
import {DemandeInscriptionListComponent} from "./demande/demande-inscription-list/demande-inscription-list.component";
import {DemandeReleveNotesListComponent} from "./demande/demande-releve-notes-list/demande-releve-notes-list.component";


@NgModule({
  declarations: [
    AppComponent,
    EtudiantCreateComponent,
    HeaderComponent,
    DemandeListComponent,
    DemandeInscriptionCreateComponent,
    DemandeReleveNotesCreateComponent,
    DemandeScolariteCreateComponent,
    DemandeScolariteListComponent,
    DemandeInscriptionListComponent,
    DemandeReleveNotesListComponent
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
