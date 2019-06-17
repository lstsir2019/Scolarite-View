import {Component, OnInit} from '@angular/core';
import {GestionNotesService} from "../../controller/service/gestion-notes.service";
import {PreselectionComponent} from "../../admission/preselection/preselection.component";
import {MatDialog} from "@angular/material";
import {ListeNotesComponent} from "./liste-notes/liste-notes.component";
import {ConcoursService} from "../../controller/service/concours.service";
import {Concours} from "../../controller/model/concours.model";
import {NoteModuleConcours} from "../../controller/model/note-module-concours";
import Swal from "sweetalert2";

@Component({
  selector: 'app-gestion-de-notes',
  templateUrl: './gestion-de-notes.component.html',
  styleUrls: ['./gestion-de-notes.component.css']
})
export class GestionDeNotesComponent implements OnInit {

  constructor(public dialog: MatDialog, public concoursService: ConcoursService, public noteModuleconcoursService: GestionNotesService) {
  }

  ngOnInit() {
    this.concoursService.findAll();
  }

  public annee: number = 1;
  public refconcours: string = "Concours";
  public refModule: string = "Module"


  public get moduleConcours() {
    return this.concoursService.listeModuleConcours;
  }

  public findModuleConcours() {
    return this.concoursService.findModuleConcoursByRefConcours(this.refconcours);
  }

  public findconcoursByAnnee() {
    return this.concoursService.findByAnneeConcours(this.annee);
  }

  public get concoursByAnnee() {
    return this.concoursService.listeConcoursByAnnee;

  }

  public get anneeConcours() {
    return this.concoursService.listeDesAnnee;
  }

  openDialog() {
    if (this.noteModuleconcoursService.refModule.match("Module")) {
      Swal.fire({
        title: 'Module Invalide',
        text: 'veuillez selectionner un Module',
        type: 'error',
      });
    } else {
      const dialogRef = this.dialog.open(ListeNotesComponent, {
        panelClass: 'custom-dialog-container',
        data: {concours: "cc"}
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

  public findByRefModule() {
    console.log(this.refModule);

    return this.noteModuleconcoursService.findNoteModules(this.refModule);
  }

  public get listeNotesModuleConcoursInBd() {
    return this.noteModuleconcoursService.filtered;
  }
}
