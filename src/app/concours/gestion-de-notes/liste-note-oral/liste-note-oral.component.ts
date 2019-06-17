import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';
import {NoteModuleConcours} from '../../../controller/model/note-module-concours';
import {GestionNotesService} from '../../../controller/service/gestion-notes.service';
import {HttpClient} from '@angular/common/http';
import {NoteConcours} from '../../../controller/model/note-concours.model';

@Component({
  selector: 'app-liste-note-oral',
  templateUrl: './liste-note-oral.component.html',
  styleUrls: ['./liste-note-oral.component.css']
})
export class ListeNoteOralComponent implements OnInit {

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

  public listeNote: Array<NoteConcours> = [];
  public filtered: Array<NoteConcours> = [];

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

  url: string = 'http://localhost:8091/admission/retenus/xls/note_oral/';

  public show: boolean;

  OnUploadFile() {
    this.show = true;
    this.http.post<Array<NoteConcours>>(this.url, this.formData).subscribe(
      data => {
        console.log(data);
        this.filtered=data;
        this.listeNote = data;
        this.dataSource = new MatTableDataSource<NoteConcours>(this.listeNote);
        this.selection = new SelectionModel<NoteConcours>(true, this.listeNote);
        this.dataSource.paginator = this.paginator;

        console.log(this.listeNote);
        this.show = false;
      }, error1 => {
        console.log("error upload0");
        this.show = false;
      })
  }

  applyFilter() {
    const filter = (note: NoteConcours[]) => this.listeNote.filter(note => note.retenueEcritVo.refCandidat.match("^" + this.refCandidat + ".*$"));
    this.filtered=filter(this.listeNote);
    this.dataSource.data = this.filtered;

  }

  public saveNotes() {

    return this.gestionDeNotes.saveNoteConcoursOral(this.selection.selected);
  }
}
