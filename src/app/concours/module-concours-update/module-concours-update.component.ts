import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

import {ConcoursService} from '../../controller/service/concours.service';
import {ModuleConcours} from '../../controller/model/module-concours.model';

@Component({
  selector: 'app-module-concours-update',
  templateUrl: './module-concours-update.component.html',
  styleUrls: ['./module-concours-update.component.css']
})
export class ModuleConcoursUpdateComponent implements OnInit {

  constructor(private concoursService: ConcoursService,
              public dialogRef: MatDialogRef<ModuleConcoursUpdateComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  coef: string="";

  ngOnInit() {
    this.concoursService.findByRefModule(this.data.module.id);
    this.concoursService.moduleSelected;
  }

  public get moduleSelected() {
    return this.concoursService.moduleSelected;
  }

  public updateModuleConcours() {
    this.concoursService.updateModuleConcours(this.data.module.id, this.coef);
  }
}
