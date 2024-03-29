import {BrowserModule} from '@angular/platform-browser';
import {ApplicationRef, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CandidatCreateComponent} from './candidature/candidat-create.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  MatAutocompleteModule,
  MatButtonModule, MatCheckboxModule, MatDialogModule,
  MatIconModule,
  MatInputModule, MatPaginator, MatPaginatorModule, MatProgressBar, MatSidenavModule,
  MatStepperModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HeaderComponent} from './header/header.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {DemandeListComponent} from './demande/demande-list/demande-list.component';
import {DemandeInscriptionCreateComponent} from './demande/demande-inscription-create/demande-inscription-create.component';
import {DemandeReleveNotesCreateComponent} from './demande/demande-releve-notes-create/demande-releve-notes-create.component';
import {DemandeScolariteCreateComponent} from './demande/demande-scolarite-create/demande-scolarite-create.component';
import {DemandeScolariteListComponent} from './demande/demande-scolarite-list/demande-scolarite-list.component';
import {DemandeInscriptionListComponent} from './demande/demande-inscription-list/demande-inscription-list.component';
import {DemandeReleveNotesListComponent} from './demande/demande-releve-notes-list/demande-releve-notes-list.component';
import {ConcoursComponent} from './concours/concours.component';
import {ListeDesPostuleComponent} from './concours/liste-des-postule/liste-des-postule.component';
import {ListeDesRetenusEcritComponent} from './concours/liste-des-retenus-ecrit/liste-des-retenus-ecrit.component';
import {ListeDesRetenusOralComponent} from './concours/liste-des-retenus-oral/liste-des-retenus-oral.component';
import {ListeDesAdmisComponent} from './concours/liste-des-admis/liste-des-admis.component';
import {ScolariteComponent} from './scolarite/scolarite.component';
import {NoteCreateComponent} from './scolarite/notes/note-create/note-create.component';
import {FiliereCreateComponent} from './scolarite/filieres/filiere-create/filiere-create.component';
import {ModuleCreateComponent} from './scolarite/modules/module-create/module-create.component';
import {EtudiantCreateComponent} from './scolarite/etudiants/etudiant-create/etudiant-create.component';
import {NgxSpinnerModule} from 'ngx-spinner';
import {MatTableModule} from '@angular/material/table';
import {AdmissionComponent} from './admission/admission.component';
import {PreselectionComponent} from './admission/preselection/preselection.component';
import {MatSortModule} from '@angular/material/sort';
import {DemandeReleveNotesInfoComponent} from './demande/demande-releve-notes-info/demande-releve-notes-info.component';
import {ConcoursCreateComponent} from './concours/concours-create/concours-create.component';
import {ConcoursListComponent} from './concours/concours-list/concours-list.component';
import {CandidatInfoComponent} from './concours/candidat-info/candidat-info.component';

import {MultiSelectAllModule} from '@syncfusion/ej2-angular-dropdowns';
import {PvsCreateComponent} from "./scolarite/pvs/pvs-create/pvs-create.component";
import { PvsListComponent } from './scolarite/pvs/pvs-list/pvs-list.component';
import { NotesListComponent } from './scolarite/notes/notes-list/notes-list.component';
import { DemandeScolariteInfoComponent } from './demande/demande-scolarite-info/demande-scolarite-info.component';
import {DemandeInfoComponent} from './demande/demande-inscription-info/demande-info.component';
import {GestionDeNotesComponent} from './concours/gestion-de-notes/gestion-de-notes.component';
import {ListeNotesComponent} from './concours/gestion-de-notes/liste-notes/liste-notes.component';
import {DemandeComponent} from './demande/demande.component';


import {SelectionModel} from '@angular/cdk/collections';
import {ConcoursInfoComponent} from './concours/concours-info/concours-info.component';
import { ConcoursUpdateComponent } from './concours/concours-update/concours-update.component';


import {ModuleConcoursUpdateComponent} from './concours/module-concours-update/module-concours-update.component';
import {NoteOralComponent} from './concours/gestion-de-notes/note-oral/note-oral.component';
import {AdmisOralComponent} from './admission/admis-oral/admis-oral.component';
import {AdmissionFinalComponent} from './admission/admission-final/admission-final.component';
import {ListeNoteOralComponent} from './concours/gestion-de-notes/liste-note-oral/liste-note-oral.component';
import {EspaceEtudiantComponent} from './espace-etudiant/espace-etudiant.component';
import {UneSeulNoteComponent} from './concours/gestion-de-notes/note-oral/une-seul-note/une-seul-note.component';
import {LoginComponent} from './login/login.component';
import {ErrorInterceptorService} from './controller/Auth/error-interceptor.service';
import {JwtInterceptorService} from './controller/Auth/jwt-interceptor.service';


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
    PvsCreateComponent,
    CandidatInfoComponent,
    DemandeComponent,
    AdmissionComponent,
    PreselectionComponent,
    ConcoursCreateComponent,
    ConcoursListComponent,
    DemandeInfoComponent,
    DemandeScolariteInfoComponent,
    DemandeInfoComponent,
    DemandeReleveNotesInfoComponent,
    ModuleConcoursUpdateComponent,
    ConcoursInfoComponent,
    PreselectionComponent,
    GestionDeNotesComponent,
    ListeNotesComponent,
    MatProgressBar,
    ConcoursUpdateComponent,
    MatProgressBar,
    NoteOralComponent,
    AdmisOralComponent,
    AdmissionFinalComponent,
    ListeNoteOralComponent,
    EspaceEtudiantComponent,
    UneSeulNoteComponent,
    LoginComponent,
    AdmissionFinalComponent,
    PvsListComponent,
    NotesListComponent


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
    NgxSpinnerModule,
    MatSidenavModule,
    MatDialogModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MultiSelectAllModule,
    MatAutocompleteModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorService, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptorService, multi: true},],
  bootstrap: [AppComponent],
  entryComponents: [PreselectionComponent,
    ConcoursInfoComponent,
    ModuleConcoursUpdateComponent,
    ListeNotesComponent,
    AdmisOralComponent,
    AdmissionFinalComponent,
    ListeNoteOralComponent,
  UneSeulNoteComponent,
  ]
})
export class AppModule {
}
