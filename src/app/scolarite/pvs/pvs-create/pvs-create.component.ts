import {Component, OnInit} from '@angular/core';
import {PvService} from "../../../controller/service/pv.service";
import {NoteEtudiantModule} from "../../../controller/model/noteetudiantmodule.model";
import {Pv} from "../../../controller/model/pv.model";

@Component({
  selector: 'app-pvs-create',
  templateUrl: './pvs-create.component.html',
  styleUrls: ['./pvs-create.component.css']
})
export class PvsCreateComponent implements OnInit {

  constructor(private _pvService: PvService) {
  }

  ngOnInit() {
    console.log( this.pvService.showProg);
  }


  public get pvs() {
    return this.pvService.pvs;
  }

  public get modules() {
    return this.pvService.modules;
  }


  public create() {
    this.pvService.create();
  }

  public get pvCreate() {
    return this.pvService.pvCreate;
  }


  get pvService(): PvService {
    return this._pvService;
  }

  set pvService(value: PvService) {
    this._pvService = value;
  }

  public deleteItem(n: Pv) {
    this.pvService.deleteItem(n);
  }

  public deleteAll() {
    this.pvService.deleteAll();
  }

  public showProg(){
    this.pvService.showProg;
  }
  public saveAll(){
   this.pvService.saveAll();
  }
  public changeValue(id: number, property: string, event: any) {
    this.pvService.updateList(id,property,event);
  }

  public updateList(id: number, property: string, event: any) {
    this.pvService.updateList(id,property,event);
  }
  public updateInternList(id: number, j: number, property: string, event: any) {
    this.pvService.updateInternList(id,j,property,event);
  }

}
