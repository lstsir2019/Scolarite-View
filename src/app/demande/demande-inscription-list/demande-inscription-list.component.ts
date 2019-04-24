import { Component, OnInit } from '@angular/core';
import {DemandeInscriptionService} from '../../controller/service/demande-inscription.service';

@Component({
  selector: 'app-demande-inscription-list',
  templateUrl: './demande-inscription-list.component.html',
  styleUrls: ['./demande-inscription-list.component.css']
})
export class DemandeInscriptionListComponent implements OnInit {

  constructor(public demandeInscriptionService : DemandeInscriptionService) { }

  ngOnInit() {
    this.demandeInscriptionService.findAll();
  }


  public get demandeInscription(){
    return this.demandeInscriptionService.demandeInscriptionCreate;
  }
  public get demandeInscriptions(){
    return this.demandeInscriptionService.demandeInscriptions;
  }

  public deleteDemandeInscription(){
    return this.demandeInscriptionService.deleteDemandeInscription();
  }

  public get demandeInscriptionSearch(){
    return this.demandeInscriptionService.demandeInscriptionSearch;
  }

  public findDemandeInscriptionByQuery() {
    this.demandeInscriptionService.findByCriteria();

  }


  // get demandeInscriptionListService(): DemandeInscriptionListService {
  //   return this._demandeInscriptionListService;
  // }
  //
  // set demandeInscriptionListService(value: DemandeInscriptionListService) {
  //   this._demandeInscriptionListService = value;
  // }
}
