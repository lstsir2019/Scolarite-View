import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CandidatCreateComponent} from "./candidature/candidat-create.component";
import {DemandeReleveNotesCreateComponent} from "./demande/demande-releve-notes-create/demande-releve-notes-create.component";
import {DemandeScolariteCreateComponent} from "./demande/demande-scolarite-create/demande-scolarite-create.component";
import {DemandeInscriptionCreateComponent} from "./demande/demande-inscription-create/demande-inscription-create.component";
import {DemandeListComponent} from "./demande/demande-list/demande-list.component";
import {ConcoursComponent} from "./concours/concours.component";
import {FiliereCreateComponent} from "./scolarite/filieres/filiere-create/filiere-create.component";
import {NoteCreateComponent} from "./scolarite/notes/note-create/note-create.component";
import {ModuleCreateComponent} from "./scolarite/modules/module-create/module-create.component";
import {EtudiantCreateComponent} from "./scolarite/etudiants/etudiant-create/etudiant-create.component";
import {CandidatInfoComponent} from "./concours/candidat-info/candidat-info.component";
import {ListeDesPostuleComponent} from "./concours/liste-des-postule/liste-des-postule.component";
import {ListeDesRetenusEcritComponent} from "./concours/liste-des-retenus-ecrit/liste-des-retenus-ecrit.component";
import {ListeDesRetenusOralComponent} from "./concours/liste-des-retenus-oral/liste-des-retenus-oral.component";
import {ListeDesAdmisComponent} from "./concours/liste-des-admis/liste-des-admis.component";
import {DemandeComponent} from './demande/demande.component';
import {ConcoursCreateComponent} from './concours/concours-create/concours-create.component';
import {ConcoursListComponent} from './concours/concours-list/concours-list.component';
import {DemandeInscriptionListComponent} from './demande/demande-inscription-list/demande-inscription-list.component';
import {DemandeInfoComponent} from './demande/demande-inscription-info/demande-info.component';
import {DemandeInscription} from './controller/model/demande-inscription.model';
import {DemandeReleveNotes} from './controller/model/demande-releve-notes.model';
import {DemandeScolariteListComponent} from './demande/demande-scolarite-list/demande-scolarite-list.component';
import {DemandeReleveNotesListComponent} from './demande/demande-releve-notes-list/demande-releve-notes-list.component';
import {DemandeScolariteInfoComponent} from './demande/demande-scolarite-info/demande-scolarite-info.component';
import {DemandeReleveNotesInfoComponent} from './demande/demande-releve-notes-info/demande-releve-notes-info.component';
import {ConcoursInfoComponent} from './concours/concours-info/concours-info.component';

import {GestionDeNotesComponent} from "./concours/gestion-de-notes/gestion-de-notes.component";
import {PvsCreateComponent} from "./scolarite/pvs/pvs-create/pvs-create.component";
import {NoteOralComponent} from "./concours/gestion-de-notes/note-oral/note-oral.component";
import {LoginComponent} from './login/login.component';
import {AuthGuardService} from './controller/Auth/auth-guard.service';

const routes: Routes = [
  { path: 'Inscription', component:CandidatCreateComponent,
    canActivate: [AuthGuardService]},
  // { path: 'DemandeReleveNotes', component:DemandeReleveNotesCreateComponent},
  // { path: 'DemandeScolarite', component:DemandeScolariteCreateComponent},
  // { path: 'DemandeInscription', component:DemandeInscriptionCreateComponent},
  // { path: 'ListeDemandes', component:DemandeListComponent},
  { path: 'Concours',   redirectTo: '/Concours/listePostule', pathMatch: 'full' },
  { path: '', component:LoginComponent},




  // { path: 'Demande', component:DemandeComponent,
  //   children: [
  //     {path:'DemandeScolarite', component:DemandeScolariteCreateComponent},
  //     {path:'DemandeInscription', component:DemandeInscriptionCreateComponent},
  //     {path:'DemandeReleveNotes', component:DemandeReleveNotesCreateComponent},
  //     {path: 'ListeDemandes', component:DemandeListComponent, children:[
  //         { path: 'Info', component:DemandeInfoComponent}
  //       ]}
  //
  //     ]},
  { path: 'scolarite', component:DemandeScolariteCreateComponent,
    canActivate: [AuthGuardService]},
  { path: 'scolarite', component:DemandeScolariteCreateComponent,
    canActivate: [AuthGuardService]},
  { path: 'inscription', component:DemandeInscriptionCreateComponent,
    canActivate: [AuthGuardService]},
  { path: 'releve', component:DemandeReleveNotesCreateComponent,
    canActivate: [AuthGuardService]},
  { path: 'liste', redirectTo :  '/liste/DemandeInscriptionList', pathMatch:'full',
    canActivate: [AuthGuardService]},


  { path: 'liste', component:DemandeListComponent,
    canActivate: [AuthGuardService],
    children: [
      {path: 'DemandeScolariteList', component:DemandeScolariteListComponent,
        canActivate: [AuthGuardService], children:[
          {path:'Infos', component:DemandeScolariteInfoComponent,
            canActivate: [AuthGuardService]}
        ]},
      {path: 'DemandeInscriptionList', component:DemandeInscriptionListComponent,
        canActivate: [AuthGuardService], children: [
          {path: 'Info', component:DemandeInfoComponent,
            canActivate: [AuthGuardService]}
        ]},
      {path: 'DemandeReleveNotesList', component:DemandeReleveNotesListComponent,
        canActivate: [AuthGuardService], children: [
          {path:'Informations', component:DemandeReleveNotesInfoComponent,
            canActivate: [AuthGuardService]}
        ]}
    ]},

  { path: 'Concours', component:ConcoursComponent,
    canActivate: [AuthGuardService],
  children:[
    { path: 'créationConcours', component:ConcoursCreateComponent,
      canActivate: [AuthGuardService]},
    { path: 'listeConcours', component:ConcoursListComponent,
      canActivate: [AuthGuardService]},
    { path: 'listeEcrit', component:ListeDesRetenusEcritComponent,
      canActivate: [AuthGuardService]},
    { path: 'listePostule', component:ListeDesPostuleComponent,
      canActivate: [AuthGuardService],children:[
        { path: 'Info', component:CandidatInfoComponent,
          canActivate: [AuthGuardService]}
      ]},
    { path: 'listeEcrit', component:ListeDesRetenusEcritComponent,
      canActivate: [AuthGuardService]},
    { path: 'listeOral', component:ListeDesRetenusOralComponent,
      canActivate: [AuthGuardService]},
    { path: 'listeAdmis', component:ListeDesAdmisComponent,
      canActivate: [AuthGuardService]},
    { path: 'GestionDesNotes', component:GestionDeNotesComponent,
      canActivate: [AuthGuardService]},
    { path: 'NoteOral', component:NoteOralComponent,
      canActivate: [AuthGuardService]},

  ]},


  { path: 'filiere', component:FiliereCreateComponent,
    canActivate: [AuthGuardService]},
  { path: 'note', component:NoteCreateComponent,
    canActivate: [AuthGuardService]},
  { path: 'pvs', component:PvsCreateComponent,
    canActivate: [AuthGuardService]},
  { path: 'modules', component:ModuleCreateComponent,
    canActivate: [AuthGuardService]},
  { path: 'etudiants', component:EtudiantCreateComponent,
    canActivate: [AuthGuardService]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
