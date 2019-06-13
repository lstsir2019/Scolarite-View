import {Component, OnInit} from '@angular/core';
import {ConcoursService} from '../../controller/service/concours.service';
import {FiliereService} from '../../controller/service/filiere.service';
import {Concours} from '../../controller/model/concours.model';
import {MatDialog} from '@angular/material';
import {ConcoursComponent} from '../concours.component';
import {ActivatedRoute} from '@angular/router';
import {ModuleConcours} from '../../controller/model/module-concours.model';
import {ModuleConcoursUpdateComponent} from '../module-concours-update/module-concours-update.component';
import {ConcoursUpdateComponent} from '../concours-update/concours-update.component';


@Component({
  selector: 'app-concours-list',
  templateUrl: './concours-list.component.html',
  styleUrls: ['./concours-list.component.css']
})
export class ConcoursListComponent implements OnInit {


  modeGlobal: number = 0;


  constructor(private concoursService: ConcoursService, private filiereService: FiliereService, public dialog: MatDialog, public route: ActivatedRoute) {
  }

  /*openInfoDialog() {
    const dialogRef = this.dialog.open(ConcoursInfoComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }*/

  OpenupdateDialog(concoursSelected: Concours): void {
    let dialogRef = this.dialog.open(ConcoursUpdateComponent, {
      width: 'custom-dialog-container',
      data: {c: concoursSelected},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }


  ngOnInit() {
    this.concoursService.findAll();
  }

  public ok() {
    this.modeGlobal = 1;
  }

  public findModuleConcoursByReferenceConcours(c: Concours) {
    this.concoursService.findModuleConcoursByReferenceConcours(c);
  }

  public removeList() {
    this.concoursService.concoursSelected = null;
  }

  public deleteModuleConcours(m) {
    this.concoursService.deleteModuleConcours(m);
  }

  public get listConcours() {
    return this.concoursService.listConcours;
  }

  public get concoursSelected() {
    return this.concoursService.concoursSelected;
  }

  public deleteConcoursComplet(concours: Concours) {
    this.concoursService.deleteConcoursComplet(concours);
  }

  public get filieres() {
    return this.concoursService.filieres;
  }

  public get concoursSearched() {
    return this.concoursService.concoursSearched;
  }

  public findByQuery() {
    this.concoursService.findByQuery();
  }

  public updateConcours(concoursUpdated: Concours) {
    return this.concoursService.updateConcours(concoursUpdated);
  }

  public get moduleSelected() {
    return this.concoursService.moduleSelected;
  }

}
