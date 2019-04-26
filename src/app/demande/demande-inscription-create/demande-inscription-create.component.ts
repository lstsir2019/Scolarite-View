import { Component, OnInit } from '@angular/core';
import {DemandeInscriptionService} from '../../controller/service/demande-inscription.service';
import {FiliereService} from '../../controller/service/filiere.service';

@Component({
  selector: 'app-demande-inscription-create',
  templateUrl: './demande-inscription-create.component.html',
  styleUrls: ['./demande-inscription-create.component.css']
})
export class DemandeInscriptionCreateComponent implements OnInit {

  constructor(public demandeInscriptionService: DemandeInscriptionService, public filiereService: FiliereService) { }

  ngOnInit() {
   this.filiereService.findAll();
   this.demandeInscriptionService.findAll();
  }


  public get demandeInscription(){
    return this.demandeInscriptionService.demandeInscriptionCreate;
  }
  public get demandeInscriptions(){
    return this.demandeInscriptionService.demandeInscriptionList;
  }

  public addDemandeInscription(){
    this.demandeInscriptionService.addDemandeInscription();
  }

  public saveDemandeInscription(){
    this.demandeInscriptionService.saveDemandeInscription();
  }
  public get filieres(){
    return this.filiereService.filieres;
  }


}
