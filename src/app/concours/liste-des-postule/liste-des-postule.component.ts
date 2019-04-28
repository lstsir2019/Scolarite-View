import { Component, OnInit } from '@angular/core';
import {CandidatService} from "../../controller/service/candidat.service";
import {ConcoursService} from "../../controller/service/concours.service";
import {EtudiantPostuleService} from "../../controller/service/etudiant-postule.service";

@Component({
  selector: 'app-liste-des-postule',
  templateUrl: './liste-des-postule.component.html',
  styleUrls: ['./liste-des-postule.component.css']
})
export class ListeDesPostuleComponent implements OnInit {

  constructor(public  etudiantPostuleService:EtudiantPostuleService,public concoursService: ConcoursService) { }

  ngOnInit() {

    this.concoursService.findAll();
  }
  public refConcours:string;
  public finByRefConcours(){
    this.etudiantPostuleService.finByRefConcours(this.refConcours);
}
  public  get listChoixs(){
    return this.etudiantPostuleService.listChoixs;
  }
  public get concourss() {
    return this.concoursService.listConcours;
  }
}
