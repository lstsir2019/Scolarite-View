import { Component, OnInit } from '@angular/core';
import {DemandeScolariteService} from '../../controller/service/demande-scolarite.service';
import {FiliereService} from '../../controller/service/filiere.service';



@Component({
  selector: 'app-demande-scolarite-create',
  templateUrl: './demande-scolarite-create.component.html',
  styleUrls: ['./demande-scolarite-create.component.css']
})
export class DemandeScolariteCreateComponent implements OnInit {

  constructor(public demandeScolariteService: DemandeScolariteService, public filiereService: FiliereService) { }

  ngOnInit() {
    this.demandeScolariteService.findAll();

  }

  public get demandeScolarite(){
    return this.demandeScolariteService.demandeScolariteCreate;
  }
  public get demandeScolarites(){
    return this.demandeScolariteService.demandeScolariteList;
  }

  public addDemandeScolarite(){
    this.demandeScolariteService.addDemandeScolarite();
  }

  public saveDemandeScolarite(){
    this.demandeScolariteService.saveDemandeScolarite();
  }

  public get filieres(){
    return this.filiereService.filieres;
  }

}
