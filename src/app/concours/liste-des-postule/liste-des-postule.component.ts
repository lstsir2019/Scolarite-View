import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {CandidatService} from "../../controller/service/candidat.service";
import {ConcoursService} from "../../controller/service/concours.service";
import {MatDialog, MatSort, MatTableDataSource, Sort} from "@angular/material";
import {ActivatedRoute} from "@angular/router";
import {PreselectionComponent} from "../../admission/preselection/preselection.component";
import {Candidat} from "../../controller/model/candidat.model";
import {AdmissionService} from "../../controller/service/admission.service";

export interface Dessert {
  calories: number;
  carbs: number;
  fat: number;
  name: string;
  protein: number;
}

@Component({
  selector: 'app-liste-des-postule',
  templateUrl: './liste-des-postule.component.html',
  styleUrls: ['./liste-des-postule.component.css']
})
export class ListeDesPostuleComponent implements OnInit {


  sortedData: Candidat[];

  constructor(public  candidatService: CandidatService, public concoursService: ConcoursService,
              public dialog: MatDialog, public route: ActivatedRoute,public admissionService:AdmissionService) {
  }



  public cne: string

  ngOnInit() {

    this.concoursService.findAll();
  }
  sortData(sort: Sort) {
    const data = this.listCandidats;
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'cne': return this.compare(a.cne, b.cne, isAsc);
        case 'cin': return this.compare(a.cin, b.cin, isAsc);
        case 'nom': return this.compare(a.nom, b.nom, isAsc);
        case 'prenom': return this.compare(a.prenom, b.prenom, isAsc);
        case 'tel': return this.compare(a.tel, b.tel, isAsc);
        default: return 0;
      }
    });
  }
  compare(a: string, b: string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

  openDialog() {
    const dialogRef = this.dialog.open(PreselectionComponent, {
      panelClass: 'custom-dialog-container',
      data: {concours: this.refConcours}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


  public refConcours: string;

  public finByRefConcours() {
    this.candidatService.finByRefConcours(this.refConcours);
  }

  public get listCandidats() {
    return this.candidatService.filtered;
  }

  public get concourss() {
    return this.concoursService.listConcours;
  }

  public findInListByCne() {
    return this.candidatService.findInListByCne(this.refConcours, this.cne);
  }

  public print() {
    this.candidatService.print(this.refConcours);
  }

  public findByCne(cne: string) {
    this.candidatService.finByCne(cne);
  }
  public findListeReteues(){
    this.admissionService.findListeReteues(this.refConcours);
  }
}
