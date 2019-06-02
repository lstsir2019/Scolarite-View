import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

import {ConcoursService} from '../../controller/service/concours.service';

@Component({
  selector: 'app-module-concours-update',
  templateUrl: './module-concours-update.component.html',
  styleUrls: ['./module-concours-update.component.css']
})
export class ModuleConcoursUpdateComponent implements OnInit {

  constructor(private concoursService:ConcoursService,
    public dialogRef: MatDialogRef<ModuleConcoursUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
    this.concoursService.findByRefModule(this.data.module.id);
    this.concoursService.moduleSelected;
  }

  public get moduleSelected (){
    return this.concoursService.moduleSelected;
  }

}
