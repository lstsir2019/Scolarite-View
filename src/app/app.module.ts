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
import { ConcoursComponent } from './concours/concours.component';
import { ListeDesPostuleComponent } from './concours/liste-des-postule/liste-des-postule.component';
import { ListeDesRetenusEcritComponent } from './concours/liste-des-retenus-ecrit/liste-des-retenus-ecrit.component';
import { ListeDesRetenusOralComponent } from './concours/liste-des-retenus-oral/liste-des-retenus-oral.component';
import { ListeDesAdmisComponent } from './concours/liste-des-admis/liste-des-admis.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { ScolariteComponent } from './scolarite/scolarite.component';
import {NoteCreateComponent} from "./scolarite/notes/note-create/note-create.component";
import {FiliereCreateComponent} from "./scolarite/filieres/filiere-create/filiere-create.component";
import {ModuleCreateComponent} from "./scolarite/modules/module-create/module-create.component";


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
    DemandeReleveNotesListComponent,
    ConcoursComponent,
    ListeDesPostuleComponent,
    ListeDesRetenusEcritComponent,
    ListeDesRetenusOralComponent,
    ListeDesAdmisComponent,
    ScolariteComponent,
    EtudiantCreateComponent,
    NoteCreateComponent,
    FiliereCreateComponent,
    ModuleCreateComponent
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
    AppRoutingModule,
    MatSidenavModule






  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
