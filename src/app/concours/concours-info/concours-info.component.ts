import {Component, OnInit} from '@angular/core';
import {ConcoursService} from '../../controller/service/concours.service';
import {Location} from '@angular/common';
import {MatDialog} from '@angular/material';
import {ConcoursCreateComponent} from '../concours-create/concours-create.component';
import {ModuleConcoursUpdateComponent} from '../module-concours-update/module-concours-update.component';
import {ModuleConcours} from '../../controller/model/module-concours.model';



@Component({
  selector: 'app-concours-info',
  templateUrl: './concours-info.component.html',
  styleUrls: ['./concours-info.component.css']
})
export class ConcoursInfoComponent implements OnInit {

  constructor(private concoursService: ConcoursService, private _location: Location, public dialog: MatDialog) {
  }

  modeGlobal: number = 0;

  public ok() {
    this.modeGlobal = 1;
  }




  openDialog(m: ModuleConcours): void {
    let dialogRef = this.dialog.open(ModuleConcoursUpdateComponent, {
      width: 'custom-dialog-container',
      data: {module: m},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  /*  OpenmoduleDialog() {
      const dialogRef = this.dialog.open(ConcoursInfoComponent,{
        data: {concours :"null"}
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
            // this.animal = result;
          });
    }*/


  ngOnInit() {
  }

  backClicked() {
    this._location.back();
  }

  /* public get modules() {
     return this.concoursService.concoursSelected.moduleConcoursVo;
   }*/

  public get concoursSelected() {
    return this.concoursService.concoursSelected;
  }

  public deleteModuleConcours(m) {
    this.concoursService.deleteModuleConcours(m);
  }
}
