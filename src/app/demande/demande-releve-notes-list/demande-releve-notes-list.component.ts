import { Component, OnInit } from '@angular/core';
import {DemandeReleveNotesService} from '../../controller/service/demande-releve-notes.service';
import {DemandeScolarite} from '../../controller/model/demande-scolarite.model';
import {DemandeReleveNotes} from '../../controller/model/demande-releve-notes.model';
import {FiliereService} from '../../controller/service/filiere.service';
import {SemestreService} from '../../controller/service/semestre.service';

@Component({
  selector: 'app-demande-releve-notes-list',
  templateUrl: './demande-releve-notes-list.component.html',
  styleUrls: ['./demande-releve-notes-list.component.css']
})
export class DemandeReleveNotesListComponent implements OnInit {

  constructor(public demandeReleveNotesService : DemandeReleveNotesService, public filiereService : FiliereService, public semestreService : SemestreService) { }

  ngOnInit() {
    this.demandeReleveNotesService.findAll();
    this.filiereService.findAll();
    this.semestreService.findAll();
  }

  public get demandeReleveNotes(){
    return this.demandeReleveNotesService.demandeReleveNotesCreate;
  }
  public get demandeReleveNotess(){
    return this.demandeReleveNotesService.demandeReleveNotess;
  }

  public deleteDemandeReleveNotes(demandeReleveNotes : DemandeReleveNotes){
    this.demandeReleveNotesService.deleteDemandeReleveNotes(demandeReleveNotes);
  }

  public get demandeReleveNotesSearch(){
    return this.demandeReleveNotesService.demandeReleveNotesSearch;
  }

    public findDemandeReleveNotesByQuery() {
    this.demandeReleveNotesService.findByCriteria();

  }

  public get filieres(){
    return this.filiereService.filieres;
  }
 public get semestres(){
    return this.semestreService.semestres;
 }



}
