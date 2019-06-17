import {Component, Inject, OnInit} from '@angular/core';
import {ConcoursService} from '../../controller/service/concours.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {ModuleConcours} from '../../controller/model/module-concours.model';
import {Concours} from '../../controller/model/concours.model';

@Component({
  selector: 'app-concours-update',
  templateUrl: './concours-update.component.html',
  styleUrls: ['./concours-update.component.css']
})
export class ConcoursUpdateComponent implements OnInit {

  constructor(private concoursService: ConcoursService, public dialogRef: MatDialogRef<ConcoursUpdateComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }

concours:Concours=this.data.c;
  ngOnInit() {
    // this.concoursService.findConcoursByRefConcours(this.concoursSelected.reference);
    this.concoursService.concoursSelected;
  }

  public get concoursSelected() {
    return this.concoursService.concoursSelected;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  public updateConcours() {
    this.concoursService.updateConcours(this.concours);
  }
}
