import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material";
import {DemandeInscriptionService} from "../../controller/service/demande-inscription.service";
import {Location} from "@angular/common";

@Component({
  selector: 'app-demande-info',
  templateUrl: './demande-info.component.html',
  styleUrls: ['./demande-info.component.css']
})
export class DemandeInfoComponent implements OnInit {

  constructor(public demandeInscriptionService:DemandeInscriptionService,private _location: Location) { }

  ngOnInit() {
  }
  backClicked() {
    this._location.back();
  }
  public get DemandeInscriptionSelected(){
    return this.demandeInscriptionService.demandeInscriptionSelected;
  }

  public get DemandeInscriptions(){
    return this.demandeInscriptionService.demandeInscriptions;
  }

}
