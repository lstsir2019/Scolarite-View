import { Component, OnInit } from '@angular/core';
import {DemandeScolariteService} from '../../controller/service/demande-scolarite.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-demande-scolarite-info',
  templateUrl: './demande-scolarite-info.component.html',
  styleUrls: ['./demande-scolarite-info.component.css']
})
export class DemandeScolariteInfoComponent implements OnInit {

  constructor(public demandeScolariteService : DemandeScolariteService, private _location: Location) { }

  ngOnInit() {
  }

  backClicked() {
    this._location.back();
  }

  public get DemandeScolariteSelected(){
    return this.demandeScolariteService.demandeScolariteSelected;
  }

}
