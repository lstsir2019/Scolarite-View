import { Component, OnInit } from '@angular/core';
import {DemandeReleveNotesService} from '../../controller/service/demande-releve-notes.service';
import {FiliereService} from '../../controller/service/filiere.service';
import {SemestreService} from '../../controller/service/semestre.service';

@Component({
  selector: 'app-demande-releve-notes-create',
  templateUrl: './demande-releve-notes-create.component.html',
  styleUrls: ['./demande-releve-notes-create.component.css']
})
export class DemandeReleveNotesCreateComponent implements OnInit {
  constructor(public demandeReleveNotesService: DemandeReleveNotesService, public filiereService: FiliereService, public semestreService : SemestreService) { }


  ngOnInit() {
    this.semestreService.findAll();
    this.demandeReleveNotesService.findAll();
  }

  public get demandeReleveNotes(){
    return this.demandeReleveNotesService.demandeReleveNotesCreate;
  }

  public get demandeReleveNotess(){
    return this.demandeReleveNotesService.demandeReleveNotesList;
  }

  public addDemandeReleveNotes(){
    this.demandeReleveNotesService.addDemandeReleveNotes();
  }

  public saveDemandeReleveNotes(){
    this.demandeReleveNotesService.saveDemandeReleveNotes();
  }

  // public addReleveNotes(){
    // this.demandeReleveNotesService.addReleveNotes();
  // }

  public get releveNotes(){
  return this.demandeReleveNotesService.releveNotesCreate;
 }

  public get filieres(){
    return this.filiereService.filieres;
  }

  public get semestres(){
    return this.semestreService.semestres;
  }
}

