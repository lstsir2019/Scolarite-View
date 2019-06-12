import {Component, OnInit} from '@angular/core';
import {PvService} from "../../../controller/service/pv.service";
import {Pv} from "../../../controller/model/pv.model";

@Component({
  selector: 'app-pvs-list',
  templateUrl: './pvs-list.component.html',
  styleUrls: ['./pvs-list.component.css']
})
export class PvsListComponent implements OnInit {

  constructor(private _pvService: PvService) {
  }

  ngOnInit() {
  }

  public findByCriteria() {
    this.pvService.findByCriteria();
  }

  public deleteListAll() {
    this.pvService.deleteListAll();
  }

  public deleteListItem(n: Pv) {
    this.pvService.deleteListItem(n);
  }

  public findNoteSemstre(cne: string, filiere: string, semestre: string, annee: string) {
    this.pvService.findNoteSemstre(cne, filiere, semestre, annee);
  }

  public edit() {
    this.pvService.edit();
  }

  public findInListByCne(cne: string) {
    this.pvService.findInListByCne(cne);
  }

  public delete(c: Pv) {
    this.pvService.delete(c);
  }

  public get pvList() {
    return this.pvService.pvList;
  }

  public get filtred() {
    return this.pvService.filtered;
  }

  public get pvListCreate() {
    return this.pvService.pvListCreate;
  }

  public get modulesList() {
    return this.pvService.modulesList;
  }

  public get noteSemSelected() {
    return this.pvService.noteSemSelected;
  }


  get pvService(): PvService {
    return this._pvService;
  }


  set pvService(value: PvService) {
    this._pvService = value;
  }

}
