import {Component, OnInit, ViewChild} from '@angular/core';
import {GestionNotesService} from "../../../controller/service/gestion-notes.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {MatPaginator, MatSort, MatTableDataSource} from "@angular/material";
import {RetenueEcrit} from "../../../controller/model/retenue-ecrit.model";
import {SelectionModel} from "@angular/cdk/collections";
import {NoteModuleConcours} from "../../../controller/model/note-module-concours";

@Component({
  selector: 'app-liste-notes',
  templateUrl: './liste-notes.component.html',
  styleUrls: ['./liste-notes.component.css']
})
export class ListeNotesComponent implements OnInit {
  displayedColumns: string[] = ['select', 'RefEtudiant', 'Nom', 'Prenom', 'Note'];
  dataSource: MatTableDataSource<any>;
  selection: SelectionModel<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: NoteModuleConcours): string {

    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.refModuleConcours + 1}`;
  }

  constructor(private gestionDeNotes: GestionNotesService, private http: HttpClient) {
  }

  ngOnInit() {
  }

  xlss() {
    this.onFileUpload(event);
  }

  public listeNote: Array<NoteModuleConcours> = [];
  public filtered: Array<NoteModuleConcours> = [];

  public get refModule() {
    return this.gestionDeNotes.refModule;
  }

  public refCandidat: string='';

  private formData = new FormData();
  selecetdFile: File;

  onFileUpload(event) {
    this.selecetdFile = event.target.files[0];
    this.formData.append("file", this.selecetdFile)
    console.log(this.selecetdFile);
    this.OnUploadFile();
  }

  url: string = 'http://localhost:8091/admission/retenus/xls/';

  public show: boolean;

  OnUploadFile() {
    this.show = true;
    this.http.post<Array<NoteModuleConcours>>(this.url, this.formData).subscribe(
      data => {
        console.log(data);
        this.filtered=data;
        this.listeNote = data;
        this.dataSource = new MatTableDataSource<NoteModuleConcours>(this.listeNote);
        this.selection = new SelectionModel<NoteModuleConcours>(true, this.listeNote);
        this.dataSource.paginator = this.paginator;

        console.log(this.listeNote);
        this.show = false;
      }, error1 => {
        console.log("error upload0");
        this.show = false;
      })
  }

  applyFilter() {
    const filter = (note: NoteModuleConcours[]) => this.listeNote.filter(note => note.retenueEcritVo.refCandidat.match("^" + this.refCandidat + ".*$"));
    this.filtered=filter(this.listeNote);
    this.dataSource.data = this.filtered;

  }

  public saveNotes() {
    for (let i = 0; i < this.selection.selected.length; i++) {
      this.selection.selected[i].refModuleConcours = this.refModule;
    }
    return this.gestionDeNotes.saveNoteModuleConcours(this.selection.selected);
  }
}
