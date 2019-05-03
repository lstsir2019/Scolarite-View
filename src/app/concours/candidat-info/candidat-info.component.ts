import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material";
import {CandidatService} from "../../controller/service/candidat.service";
import {Location} from "@angular/common";

@Component({
  selector: 'app-candidat-info',
  templateUrl: './candidat-info.component.html',
  styleUrls: ['./candidat-info.component.css']
})
export class CandidatInfoComponent implements OnInit {

  constructor(public condidatrService:CandidatService,private _location: Location) { }

  ngOnInit() {
  }
  backClicked() {
    this._location.back();
  }
public get CandidatSelected(){
   return this.condidatrService.CondidatSelected;
}
}
