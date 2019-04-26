import { Component, OnInit } from '@angular/core';
import {EtudiantService} from '../../../controller/service/etudiant.service';



@Component({
  selector: 'app-etudiant-create',
  templateUrl: './etudiant-create.component.html',
  styleUrls: ['./etudiant-create.component.css']
})
export class EtudiantCreateComponent implements OnInit {

  constructor(private etudiantService: EtudiantService) { }

  ngOnInit() {
  }

  public get etudiant() {
    return this.etudiantService.etudiantCreate;
  }
  public get etudiants() {
    return this.etudiantService.etudiantCreate.etudiants;
  }

  // public addEtudiant() {
  //   this.etudiantService.addEtudiant();
  // }

  public saveEtudiant() {
    this.etudiantService.save();
  }

}
