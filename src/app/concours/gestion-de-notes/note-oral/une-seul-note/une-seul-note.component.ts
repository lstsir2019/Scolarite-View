import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material';
import {RetenueOralServiceService} from '../../../../controller/service/retenue-oral-service.service';

@Component({
  selector: 'app-une-seul-note',
  templateUrl: './une-seul-note.component.html',
  styleUrls: ['./une-seul-note.component.css']
})
export class UneSeulNoteComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:any,public dialog: MatDialog,public retenusOral:RetenueOralServiceService) { }

  ngOnInit() {
    this.retenusOral.findlisteRetenueInBd(this.data.concours)
  }
closeDialog(){
    this.dialog.closeAll();
}
public get ListCandidatOral(){
    return this.retenusOral.listRetenueOralInBd;
}
}
