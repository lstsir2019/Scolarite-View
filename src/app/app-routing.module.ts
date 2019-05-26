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
import {GestionDeNotesComponent} from "./concours/gestion-de-notes/gestion-de-notes.component";

const routes: Routes = [
  { path: 'Inscription', component:CandidatCreateComponent},
  // { path: 'DemandeReleveNotes', component:DemandeReleveNotesCreateComponent},
  // { path: 'DemandeScolarite', component:DemandeScolariteCreateComponent},
  // { path: 'DemandeInscription', component:DemandeInscriptionCreateComponent},
  // { path: 'ListeDemandes', component:DemandeListComponent},
  { path: 'Concours',   redirectTo: '/Concours/listePostule', pathMatch: 'full' },





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

  { path: 'scolarite', component:DemandeScolariteCreateComponent},
  { path: 'inscription', component:DemandeInscriptionCreateComponent},
  { path: 'releve', component:DemandeReleveNotesCreateComponent},
  { path: 'liste', redirectTo :  '/liste/DemandeInscriptionList', pathMatch:'full'},


  { path: 'liste', component:DemandeListComponent,
    children: [
      {path: 'DemandeScolariteList', component:DemandeScolariteListComponent, children:[
          {path:'Infos', component:DemandeScolariteInfoComponent}
        ]},
      {path: 'DemandeInscriptionList', component:DemandeInscriptionListComponent, children: [
          {path: 'Info', component:DemandeInfoComponent}
        ]},
      {path: 'DemandeReleveNotesList', component:DemandeReleveNotesListComponent, children: [
          {path:'Informations', component:DemandeReleveNotesInfoComponent}
        ]}
    ]},

  { path: 'Concours', component:ConcoursComponent,
  children:[
    { path: 'créationConcours', component:ConcoursCreateComponent},
    { path: 'listeConcours', component:ConcoursListComponent},
    { path: 'listeEcrit', component:ListeDesRetenusEcritComponent},
    { path: 'listePostule', component:ListeDesPostuleComponent,children:[
        { path: 'Info', component:CandidatInfoComponent}
      ]},
    { path: 'listeEcrit', component:ListeDesRetenusEcritComponent},
    { path: 'listeOral', component:ListeDesRetenusOralComponent},
    { path: 'listeAdmis', component:ListeDesAdmisComponent},
    { path: 'GestionDesNotes', component:GestionDeNotesComponent},

  ]},

  { path: 'filiere', component:FiliereCreateComponent},
  { path: 'note', component:NoteCreateComponent},
  { path: 'modules', component:ModuleCreateComponent},
  { path: 'etudiants', component:EtudiantCreateComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
