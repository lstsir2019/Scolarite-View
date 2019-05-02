import { Component, OnInit } from '@angular/core';
import {DemandeInscriptionService} from '../../controller/service/demande-inscription.service';
import {DemandeScolarite} from '../../controller/model/demande-scolarite.model';
import {DemandeInscription} from '../../controller/model/demande-inscription.model';
import {FiliereService} from '../../controller/service/filiere.service';

@Component({
  selector: 'app-demande-inscription-list',
  templateUrl: './demande-inscription-list.component.html',
  styleUrls: ['./demande-inscription-list.component.css']
})
export class DemandeInscriptionListComponent implements OnInit {

  constructor(public demandeInscriptionService : DemandeInscriptionService, public filiereService : FiliereService) { }

  ngOnInit() {
    this.demandeInscriptionService.findAll();
    this.filiereService.findAll();
  }


  public get demandeInscription(){
    return this.demandeInscriptionService.demandeInscriptionCreate;
  }
  public get demandeInscriptions(){
    return this.demandeInscriptionService.demandeInscriptions;
  }

  public deleteDemandeInscription(demandeInscription : DemandeInscription){
    this.demandeInscriptionService.deleteDemandeInscription(demandeInscription);
  }

  public get demandeInscriptionSearch(){
    return this.demandeInscriptionService.demandeInscriptionSearch;
  }

  public findDemandeInscriptionByQuery() {
    this.demandeInscriptionService.findByCriteria();

  }

  public get filieres(){
    return this.filiereService.filieres;
  }



  // get demandeInscriptionListService(): DemandeInscriptionListService {
  //   return this._demandeInscriptionListService;
  // }
  //
  // set demandeInscriptionListService(value: DemandeInscriptionListService) {
  //   this._demandeInscriptionListService = value;
  // }
}
