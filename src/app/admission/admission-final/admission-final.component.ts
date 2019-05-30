import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from "@angular/material";
import {RetenueEcrit} from "../../controller/model/retenue-ecrit.model";
import {SelectionModel} from "@angular/cdk/collections";
import {CandidatService} from "../../controller/service/candidat.service";
import {AdmissionService} from "../../controller/service/admission.service";

@Component({
  selector: 'app-admission-final',
  templateUrl: './admission-final.component.html',
  styleUrls: ['./admission-final.component.css']
})
export class AdmissionFinalComponent implements OnInit {
  displayedColumns: string[] = ['select', 'position', 'name', 'weight', 'symbol', 'mention'];
  dataSource = new MatTableDataSource<RetenueEcrit>(this.admissionService.listCandidats);
  selection = new SelectionModel<RetenueEcrit>(true, this.admissionService.listCandidatsSelected);
  public filtered: Array<RetenueEcrit>;

  constructor(public candiatService: CandidatService, public  admissionService: AdmissionService) {
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
    const filter = (note: RetenueEcrit[]) => this.admissionService.listCandidats.filter(retenue => retenue.refCandidat.match("^" + this.refCandidat + ".*$"));
    this.filtered = filter(this.admissionService.listCandidats);
    this.dataSource.data = this.filtered;

  }

  private refCandidat: string;

  public saveListeReteues() {
    this.admissionService.saveListeReteues(this.selection.selected,'')
  }
}
