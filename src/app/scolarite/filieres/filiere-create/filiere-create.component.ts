import { Component, OnInit } from '@angular/core';
import {FiliereService} from '../../../controller/service/filiere.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-filiere-create',
  templateUrl: './filiere-create.component.html',
  styleUrls: ['./filiere-create.component.css']
})
export class FiliereCreateComponent implements OnInit {

  constructor(private filiereService: FiliereService) { }

  ngOnInit() {
    this.filiereService.findAll();
  }

  public get filiere() {
    return this.filiereService.filiereCreate;
  }
  public get filieres() {
    return this.filiereService.filieres;
  }

  public addFiliere() {
    this.filiereService.addFiliere();
  }

  public save() {
    this.filiereService.save();
  }
}
