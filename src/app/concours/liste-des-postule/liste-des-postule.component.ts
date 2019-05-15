import {Component, OnInit} from '@angular/core';
import {CandidatService} from "../../controller/service/candidat.service";
import {ConcoursService} from "../../controller/service/concours.service";
import {MatDialog} from "@angular/material";
import {CandidatInfoComponent} from "../candidat-info/candidat-info.component";
import {ActivatedRoute} from "@angular/router";
import {PreselectionComponent} from "../../admission/preselection/preselection.component";


@Component({
  selector: 'app-liste-des-postule',
  templateUrl: './liste-des-postule.component.html',
  styleUrls: ['./liste-des-postule.component.css']
})
export class ListeDesPostuleComponent implements OnInit {

  constructor(public  candidatService: CandidatService, public concoursService: ConcoursService,public dialog: MatDialog,public route: ActivatedRoute) {
  }

public cne:string
  ngOnInit() {
    this.concoursService.findAll();
    }

  openDialog() {
    const dialogRef = this.dialog.open(PreselectionComponent, {panelClass: 'custom-dialog-container', data: {concours:this.refConcours}});
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

public findInListByCne(){
    return this.candidatService.findInListByCne(this.refConcours,this.cne);
}
  public print(){
    this.candidatService.print(this.refConcours);
  }
  public findByCne(cne:string){
    this.candidatService.finByCne(cne);
  }
}
