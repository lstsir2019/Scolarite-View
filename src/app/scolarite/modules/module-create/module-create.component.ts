import { Component, OnInit } from '@angular/core';
import {ModuleService} from '../../../controller/service/module.service';
import {FiliereService} from '../../../controller/service/filiere.service';

@Component({
  selector: 'app-module-create',
  templateUrl: './module-create.component.html',
  styleUrls: ['./module-create.component.css']
})
export class ModuleCreateComponent implements OnInit {

  constructor(private moduleService: ModuleService) { }

  filiereService: FiliereService;
  ngOnInit() {

  }
  public get module() {
    return this.moduleService.moduleCreate;
  }
  // public get modules() {
  //   return this.moduleService.modules;
  // }
  public addModule() {
    this.moduleService.addModule();
  }
  public get filieres() {
    return this.moduleService.filieres;
  }

  public save() {
    this.moduleService.save();
  }




}
