import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EtudiantCreateComponent} from "./candidature/etudiant-create.component";
import {DemandeReleveNotesCreateComponent} from "./demande/demande-releve-notes-create/demande-releve-notes-create.component";
import {DemandeScolariteCreateComponent} from "./demande/demande-scolarite-create/demande-scolarite-create.component";
import {DemandeInscriptionCreateComponent} from "./demande/demande-inscription-create/demande-inscription-create.component";
import {DemandeListComponent} from "./demande/demande-list/demande-list.component";
import {ConcoursComponent} from "./concours/concours.component";

const routes: Routes = [
  { path: 'Inscription', component:EtudiantCreateComponent},
  { path: 'DemandeReleveNotes', component:DemandeReleveNotesCreateComponent},
  { path: 'DemandeScolarite', component:DemandeScolariteCreateComponent},
  { path: 'DemandeInscription', component:DemandeInscriptionCreateComponent},
  { path: 'ListeDemandes', component:DemandeListComponent},
  { path: 'Concours', component:ConcoursComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
