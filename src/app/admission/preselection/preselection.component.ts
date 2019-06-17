import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatPaginator, MatTableDataSource} from "@angular/material";
import {CandidatService} from "../../controller/service/candidat.service";
import {SelectionModel} from '@angular/cdk/collections';
import {Candidat} from "../../controller/model/candidat.model";
import {AdmissionService} from "../../controller/service/admission.service";
import {reference} from "@angular/core/src/render3";
import {RetenueEcrit} from "../../controller/model/retenue-ecrit.model";
import {NoteModuleConcours} from "../../controller/model/note-module-concours";

@Component({
  selector: 'app-preselection',
  templateUrl: './preselection.component.html',
  styleUrls: ['./preselection.component.css']
})


export class PreselectionComponent implements OnInit {
  displayedColumns: string[] = ['select', 'position', 'name', 'weight', 'symbol', 'mention','note'];
  dataSource = new MatTableDataSource<RetenueEcrit>(this.admissionService.listCandidats);
  selection = new SelectionModel<RetenueEcrit>(true, this.admissionService.listCandidatsSelected);
  public filtered: Array<RetenueEcrit>;

  constructor(public candiatService: CandidatService, public  admissionService: AdmissionService,@Inject(MAT_DIALOG_DATA) public data:any) {
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: RetenueEcrit): string {

    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.refCandidat + 1}`;
  }


  ngOnInit() {
    console.log(this.data);
    this.dataSource.paginator = this.paginator;
  }

  applyFilter() {
    const filter = (note: RetenueEcrit[]) => this.admissionService.listCandidats.filter(retenue => retenue.refCandidat.match("^" + this.refCandidat + ".*$"));
    this.filtered = filter(this.admissionService.listCandidats);
    this.dataSource.data = this.filtered;

  }

  private refCandidat: string;

  public saveListeReteues() {
    this.admissionService.saveListeReteues(this.selection.selected,this.data.concours)
  }
}

