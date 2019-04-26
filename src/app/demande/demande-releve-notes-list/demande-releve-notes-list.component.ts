import { Component, OnInit } from '@angular/core';
import {DemandeReleveNotesService} from '../../controller/service/demande-releve-notes.service';

@Component({
  selector: 'app-demande-releve-notes-list',
  templateUrl: './demande-releve-notes-list.component.html',
  styleUrls: ['./demande-releve-notes-list.component.css']
})
export class DemandeReleveNotesListComponent implements OnInit {

  constructor(public demandeReleveNotesService : DemandeReleveNotesService) { }

  ngOnInit() {
    this.demandeReleveNotesService.findAll();
  }

  public get demandeReleveNotes(){
    return this.demandeReleveNotesService.demandeReleveNotesCreate;
  }
  public get demandeReleveNotess(){
    return this.demandeReleveNotesService.demandeReleveNotess;
  }

  public get demandeReleveNotesSearch(){
    return this.demandeReleveNotesService.demandeReleveNotesSearch;
  }

    public findDemandeReleveNotesByQuery() {
    this.demandeReleveNotesService.findByCriteria();

  }


}
