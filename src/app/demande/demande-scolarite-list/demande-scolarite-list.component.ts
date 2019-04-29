import { Component, OnInit } from '@angular/core';
import {DemandeScolariteService} from '../../controller/service/demande-scolarite.service';
import {DemandeScolarite} from '../../controller/model/demande-scolarite.model';
import {Filiere} from '../../controller/model/filiere.model';
import {FiliereService} from '../../controller/service/filiere.service';

@Component({
  selector: 'app-demande-scolarite-list',
  templateUrl: './demande-scolarite-list.component.html',
  styleUrls: ['./demande-scolarite-list.component.css']
})
export class DemandeScolariteListComponent implements OnInit {

  constructor(public demandeScolariteService : DemandeScolariteService, public filiereService : FiliereService) { }



  ngOnInit() {
    this.demandeScolariteService.findAll();
    this.filiereService.findAll();
  }

  public get demandeScolarite(){
    return this.demandeScolariteService.demandeScolariteCreate;
  }
  public get demandeScolarites(){
    return this.demandeScolariteService.demandeScolarites;
  }


  // public deleteDemandeScolarite(){
  //   this.demandeScolariteService.deleteDemandeScolarite(this.demandeScolarite.refEtudiant);
  //
  // }

  public get demandeScolariteSelected(){
    return this.demandeScolariteService.demandeScolariteSelected;
  }



  public deleteDemandeScolarite(demandeScolarite : DemandeScolarite){
    this.demandeScolariteService.deleteDemandeScolarite(demandeScolarite);
  }

  public deleteD (d: DemandeScolarite){
    this.demandeScolariteService.deleteD(d);
  }

  public get demandeScolariteSearch(){
    return this.demandeScolariteService.demandeScolariteSearch;
  }
  public findDemandeScolariteByQuery() {
    this.demandeScolariteService.findByCriteria();

  }

  // public delete(){
  //   return this.demandeScolariteService.deleteDemandeScolarite();
  // }

  // public chercherDemande(){
  //   this.demandeScolariteService.chercherDemande();
  // }

}
