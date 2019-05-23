import {Component, OnInit} from '@angular/core';
import {ConcoursService} from '../../controller/service/concours.service';
import {FiliereService} from '../../controller/service/filiere.service';
import {ModuleConcours} from '../../controller/model/module-concours.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-concours-create',
  templateUrl: './concours-create.component.html',
  styleUrls: ['./concours-create.component.css']
})
export class ConcoursCreateComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;


  constructor(private _formBuilder: FormBuilder, private concoursService: ConcoursService, private filiereService: FiliereService) {
  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.filiereService.findAll();

  }

  public get concours() {
    return this.concoursService.concoursCreate;
  }

  public get moduleConcours() {
    return this.concoursService.moduleCreate;
  }

  public get modules() {
    return this.concoursService.concoursCreate.moduleConcoursVo;
  }

  public addModuleConcours() {
    this.concoursService.addModuleConcours();
  }

  public saveConcours() {
    this.concoursService.saveConcours();
  }

  public get filieres() {
    return this.filiereService.filieres;
  }

  /*public deleteD (moduleConcours:ModuleConcours){
    this.concoursService.deleteD(moduleConcours);
  }
  */
  public deleteD(moduleConcours: ModuleConcours) {
    this.concoursService.concoursCreate.moduleConcoursVo.splice(
      this.concoursService.concoursCreate.moduleConcoursVo.indexOf(moduleConcours), 1
    );
  }
}

