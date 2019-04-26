import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EtudiantCreateComponent} from "./candidature/etudiant-create.component";
import {DemandeReleveNotesCreateComponent} from "./demande/demande-releve-notes-create/demande-releve-notes-create.component";
import {DemandeScolariteCreateComponent} from "./demande/demande-scolarite-create/demande-scolarite-create.component";
import {DemandeInscriptionCreateComponent} from "./demande/demande-inscription-create/demande-inscription-create.component";
import {DemandeListComponent} from "./demande/demande-list/demande-list.component";
import {ConcoursComponent} from "./concours/concours.component";
import {FiliereCreateComponent} from "./scolarite/filieres/filiere-create/filiere-create.component";
import {NoteCreateComponent} from "./scolarite/notes/note-create/note-create.component";
import {ModuleCreateComponent} from "./scolarite/modules/module-create/module-create.component";

const routes: Routes = [
  { path: 'Inscription', component:EtudiantCreateComponent},
  { path: 'DemandeReleveNotes', component:DemandeReleveNotesCreateComponent},
  { path: 'DemandeScolarite', component:DemandeScolariteCreateComponent},
  { path: 'DemandeInscription', component:DemandeInscriptionCreateComponent},
  { path: 'ListeDemandes', component:DemandeListComponent},
  { path: 'Concours', component:ConcoursComponent},
  { path: 'filiere', component:FiliereCreateComponent},
  { path: 'note', component:NoteCreateComponent},
  { path: 'modules', component:ModuleCreateComponent},
  { path: 'etudiants', component:EtudiantCreateComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
