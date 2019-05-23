import { BrowserModule } from '@angular/platform-browser';
import {ApplicationRef, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { CandidatCreateComponent } from './candidature/candidat-create.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  MatButtonModule,
  MatIconModule,
  MatInputModule, MatSidenavModule,
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
import { ScolariteComponent } from './scolarite/scolarite.component';
import {NoteCreateComponent} from "./scolarite/notes/note-create/note-create.component";
import {FiliereCreateComponent} from "./scolarite/filieres/filiere-create/filiere-create.component";
import {ModuleCreateComponent} from "./scolarite/modules/module-create/module-create.component";
import {EtudiantCreateComponent} from "./scolarite/etudiants/etudiant-create/etudiant-create.component";
import { NgxSpinnerModule } from 'ngx-spinner';
import { PvsComponent } from './scolarite/pvs/pvs.component';
import { PvsCreateComponent } from './scolarite/pvs/pvs-create/pvs-create.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';



@NgModule({
  declarations: [
    AppComponent,
    CandidatCreateComponent,
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
    CandidatCreateComponent,
    NoteCreateComponent,
    FiliereCreateComponent,
    ModuleCreateComponent,
    EtudiantCreateComponent,
    PvsComponent,
    PvsCreateComponent
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
    AppRoutingModule,
    MatSidenavModule,
    MatProgressBarModule,
    NgxSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
