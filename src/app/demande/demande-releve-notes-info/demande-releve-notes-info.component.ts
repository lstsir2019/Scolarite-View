import { Component, OnInit } from '@angular/core';
import {DemandeReleveNotesService} from '../../controller/service/demande-releve-notes.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-demande-releve-notes-info',
  templateUrl: './demande-releve-notes-info.component.html',
  styleUrls: ['./demande-releve-notes-info.component.css']
})
export class DemandeReleveNotesInfoComponent implements OnInit {

  constructor(public demandeReleveNotesService : DemandeReleveNotesService, private _location: Location) { }

  ngOnInit() {
  }
  backClicked() {
    this._location.back();
  }

  public get DemandeReleveNotesSelected(){
    return this.demandeReleveNotesService.demandeReleveNotesSelected;
  }
}
