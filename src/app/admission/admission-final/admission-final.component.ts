import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatPaginator, MatTableDataSource} from '@angular/material';
import {RetenueEcrit} from "../../controller/model/retenue-ecrit.model";
import {SelectionModel} from "@angular/cdk/collections";
import {CandidatService} from "../../controller/service/candidat.service";
import {AdmissionService} from "../../controller/service/admission.service";
import {RetenueOralServiceService} from '../../controller/service/retenue-oral-service.service';

@Component({
  selector: 'app-admission-final',
  templateUrl: './admission-final.component.html',
  styleUrls: ['./admission-final.component.css']
})
export class AdmissionFinalComponent implements OnInit {
  displayedColumns: string[] = ['select', 'position', 'name', 'weight', 'symbol', 'mention'];
  dataSource = new MatTableDataSource<RetenueEcrit>(this.retenueOralService.listeRetenueFinal);
  selection = new SelectionModel<RetenueEcrit>(true, this.retenueOralService.listeRetenueFinalSelected);
  public filtered: Array<RetenueEcrit>;

  constructor(public candiatService: CandidatService, public  retenueOralService: RetenueOralServiceService,@Inject(MAT_DIALOG_DATA) public data:any) {
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: RetenueEcrit): string {

    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.refCandidat + 1}`;
  }


  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter() {
    const filter = (note: RetenueEcrit[]) => this.retenueOralService.listeRetenueFinal.filter(retenue => retenue.refCandidat.match("^" + this.refCandidat + ".*$"));
    this.filtered = filter(this.retenueOralService.listeRetenueFinal);
    this.dataSource.data = this.filtered;

  }

  private refCandidat: string;
public saveListeReteuesFinal(){
  return this.retenueOralService.saveListeReteuesFinal(this.selection.selected,this.data.concours)
}

}
