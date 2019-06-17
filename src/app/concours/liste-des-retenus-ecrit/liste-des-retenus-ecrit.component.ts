import {Component, OnInit} from '@angular/core';
import {AdmissionService} from "../../controller/service/admission.service";
import {ConcoursService} from "../../controller/service/concours.service";
import {RetenueEcrit} from "../../controller/model/retenue-ecrit.model";
import {PreselectionComponent} from "../../admission/preselection/preselection.component";
import {MatDialog} from "@angular/material";
import {AdmisOralComponent} from "../../admission/admis-oral/admis-oral.component";

@Component({
  selector: 'app-liste-des-retenus-ecrit',
  templateUrl: './liste-des-retenus-ecrit.component.html',
  styleUrls: ['./liste-des-retenus-ecrit.component.css']
})
export class ListeDesRetenusEcritComponent implements OnInit {

  constructor(public admissionService: AdmissionService, public concoursService: ConcoursService,   public dialog: MatDialog) {
  }

  public get filteredRetenue() {
    return this.admissionService.filteredRetenueEcrit;
  }

  ngOnInit() {

    this.concoursService.findAll();
  }
  openDialog() {
    const dialogRef = this.dialog.open(AdmisOralComponent, {
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
    this.admissionService.applyFilter(this.refCandidat);
  }
public findListeReteuesOral(){
    return this.admissionService.findListeReteuesOral(this.refConcours);
}
  public findRetenueByRefConcours() {

    this.admissionService.findRetenueByRefConcours(this.refConcours);

  }

  public printRetenueEcrit() {
    return this.admissionService.print(this.refConcours);
  }

  public get retenueEcritBd() {
    return this.admissionService.filteredRetenueEcrit;
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
