import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EtudiantCreateComponent} from "./candidature/etudiant-create.component";

const routes: Routes = [
  { path: 'Inscription', component:EtudiantCreateComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
