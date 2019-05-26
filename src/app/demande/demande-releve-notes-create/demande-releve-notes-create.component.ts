import {Component, OnInit, ViewChild} from '@angular/core';
import {DemandeReleveNotesService} from '../../controller/service/demande-releve-notes.service';
import {FiliereService} from '../../controller/service/filiere.service';
import {SemestreService} from '../../controller/service/semestre.service';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {RetenueEcrit} from '../../controller/model/retenue-ecrit.model';
import {Semestre} from '../../controller/model/semestre.model';
import {SelectionModel} from '@angular/cdk/collections';

@Component({
  selector: 'app-demande-releve-notes-create',
  templateUrl: './demande-releve-notes-create.component.html',
  styleUrls: ['./demande-releve-notes-create.component.css']
})
export class DemandeReleveNotesCreateComponent implements OnInit {

  masterSelected:boolean;
  checkedList:any;


  // displayedColumns: string[] = ['select','position'];
  // dataSource = new MatTableDataSource<Semestre>(this.demandeReleveNotesService.semestres);
  // selection = new SelectionModel<Semestre>(true, this.demandeReleveNotesService.semestresSelected);
  constructor(public demandeReleveNotesService: DemandeReleveNotesService, public filiereService: FiliereService, public semestreService : SemestreService) {

    this.masterSelected = false;
    this.demandeReleveNotesService.semestres = [];
    // this.getCheckedItemList();
  }

  // checkboxLabel(row?: Semestre): string {
  //
  //   return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.libelle + 1}`;
  // }

  ngOnInit() {
    this.semestreService.findAll();
    this.demandeReleveNotesService.findAll();
  }

  isAllSelected() {
    this.masterSelected = this.semestres.every(function(item:any) {
      return item.isSelected == true;
    })
  }

  // getCheckedItemList(){
  //   this.checkedList = [];
  //   for (var i = 0; i < this.semestres.length; i++) {
  //     if(this.semestres[i].isSelected)
  //       this.checkedList.push(this.semestres[i]);
  //   }
  //   this.checkedList = JSON.stringify(this.checkedList);
  // }

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

