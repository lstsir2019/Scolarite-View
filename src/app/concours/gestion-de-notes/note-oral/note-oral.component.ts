import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {ConcoursService} from '../../../controller/service/concours.service';
import {GestionNotesService} from '../../../controller/service/gestion-notes.service';
import Swal from "sweetalert2";
import {ListeNotesComponent} from '../liste-notes/liste-notes.component';
import {ListeNoteOralComponent} from '../liste-note-oral/liste-note-oral.component';
import {UneSeulNoteComponent} from './une-seul-note/une-seul-note.component';

@Component({
  selector: 'app-note-oral',
  templateUrl: './note-oral.component.html',
  styleUrls: ['./note-oral.component.css']
})
export class NoteOralComponent implements OnInit {

  constructor(public dialog: MatDialog, public concoursService: ConcoursService, public noteModuleconcoursService: GestionNotesService) {
  }

  ngOnInit() {
    this.concoursService.findAll();
  }

  public annee: number = 1;
  public refconcours: string = "Concours";



  public findconcoursByAnnee() {
    return this.concoursService.findByAnneeConcours(this.annee);
  }

  public get concoursByAnnee() {
    return this.concoursService.listeConcoursByAnnee;

  }

  public get anneeConcours() {
    return this.concoursService.listeDesAnnee;
  }
  openDialogUpload() {
    if (this.refconcours.match("Concours")) {
      Swal.fire({
        title: 'Concours Invalide',
        text: 'veuillez selectionner un Module',
        type: 'error',
      });
    } else {
      const dialogRef = this.dialog.open(ListeNoteOralComponent, {
        panelClass: 'custom-dialog-container',
        data: {concours: this.refconcours}
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
    }
  }
  openDialog() {
    if (this.refconcours.match("Concours")) {
      Swal.fire({
        title: 'Concours Invalide',
        text: 'veuillez selectionner un Module',
        type: 'error',
      });
    } else {
      const dialogRef = this.dialog.open(UneSeulNoteComponent, {
        panelClass: 'custom-dialog-container',
        data: {concours: this.refconcours}
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
    }
  }
  public refCandidat: string;

  public findInListByCne() {
    return this.noteModuleconcoursService.findInListByRefCandidat(this.refCandidat);

  }

  public findByRefConcours() {
    return this.noteModuleconcoursService.findNoteConcours(this.refconcours);
  }

  public get listeNotesConcoursInBd() {
    return this.noteModuleconcoursService.filteredNoteConcours;
  }
}
