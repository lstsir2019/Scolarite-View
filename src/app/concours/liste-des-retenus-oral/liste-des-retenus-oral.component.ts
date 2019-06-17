import { Component, OnInit } from '@angular/core';
import {AdmissionService} from "../../controller/service/admission.service";
import {ConcoursService} from "../../controller/service/concours.service";
import {MatDialog} from "@angular/material";
import {AdmisOralComponent} from "../../admission/admis-oral/admis-oral.component";
import {AdmissionFinalComponent} from "../../admission/admission-final/admission-final.component";
import {RetenueOralServiceService} from '../../controller/service/retenue-oral-service.service';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-liste-des-retenus-oral',
  templateUrl: './liste-des-retenus-oral.component.html',
  styleUrls: ['./liste-des-retenus-oral.component.css']
})
export class ListeDesRetenusOralComponent implements OnInit {

  constructor(public retenueOralService: RetenueOralServiceService, public concoursService: ConcoursService,   public dialog: MatDialog) {
  }

  public get filteredRetenueOral() {
    return this.retenueOralService.filteredRetenueOral;
  }

  ngOnInit() {
    this.concoursService.findAll();

  }

  openDialog() {
    const dialogRef = this.dialog.open(AdmissionFinalComponent, {
      panelClass: 'custom-dialog-container',
      data: {concours: this.refConcours}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  public refConcours: string;
  public annee: number;
  public refCandidat: string;

  public applyFilter() {
    this.retenueOralService.applyFilter(this.refCandidat);
  }

  public findRetenueOralByRefConcours() {
    this.retenueOralService.findlisteRetenueInBd(this.refConcours);
  }
  public findRetenueFinal(){
    this.retenueOralService.findListeReteuesFinal(this.refConcours);
  }

  public print() {
    return this.retenueOralService.print(this.refConcours);
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

}
