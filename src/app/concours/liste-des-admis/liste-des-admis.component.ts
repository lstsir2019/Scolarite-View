import {Component, OnInit} from '@angular/core';
import {Concours} from '../../controller/model/concours.model';
import {ConcoursService} from '../../controller/service/concours.service';
import {RetenueFinalService} from '../../controller/service/retenue-final.service';

@Component({
  selector: 'app-liste-des-admis',
  templateUrl: './liste-des-admis.component.html',
  styleUrls: ['./liste-des-admis.component.css']
})
export class ListeDesAdmisComponent implements OnInit {

  constructor(private concoursService: ConcoursService, private retenueFinalService: RetenueFinalService) {
  }

  ngOnInit() {
    this.concoursService.findAll();
  }

  private refConcours: string;
  private annee: number = 0;
  private refCandidat:string;

  public get concours() {
    return this.concoursService.listeConcoursByAnnee;
  }

  public get anneeConcours() {
    return this.concoursService.listeDesAnnee;
  }

  public findConcoursByAnee() {
    this.concoursService.findByAnneeConcours(this.annee);
  }

  public findListeRetenueInBd() {
    return this.retenueFinalService.findlisteRetenueInBd(this.refConcours);
  }

  public filter() {
    return this.retenueFinalService.applyFilter(this.refCandidat);
  }

  public get listeRetenueFinalInBd() {
    return this.retenueFinalService.filteredRetenueFinalInBd;
  }

  public print() {
    this.retenueFinalService.print(this.refConcours);
  }
}
