import {Injectable} from '@angular/core';
import {Pv} from "../model/pv.model";
import {HttpClient} from "@angular/common/http";
import Swal from "sweetalert2";
import {NoteEtudiantModule} from "../model/noteetudiantmodule.model";
import {PvCreate} from "../model/pvCreate.model";
import {NgxSpinnerService} from 'ngx-spinner';


@Injectable({
  providedIn: 'root'
})
export class PvService {

  constructor(private _http: HttpClient, private _spinner: NgxSpinnerService) {
  }

  private _url = 'http://localhost:8097/efaculte-api-notes/notes';
  private _pvCreate: PvCreate = new PvCreate('', '3', '0', '1', '3', '', '', false, '', '', '');
  private _pvListCreate: PvCreate = new PvCreate('', '', '', '', '', '', '', false, '', '', '');
  private _pvs: Array<Pv>;
  private _pvList: Array<Pv>;
  private _modules: Array<string> = ['MODULE1','MODULE2','MODULE3','MODULE4','MODULE5','MODULE6'];
  private _modulesList: Array<string> = ['MODULE1','MODULE2','MODULE3','MODULE4','MODULE5','MODULE6'];
  public filtered: Array<Pv> = new Array<Pv>();
  private _noteSemSelected: Pv = new Pv('','','','','',0,'','',0,0,0,'');


  private _notesModulaires: Array<NoteEtudiantModule>;
  public showProg: boolean = false;
  public fil: string = "";
  public oldfil: string = "";
  public sem: string = "";
  public oldsem: string = "";
  public an: string = "";
  public oldan: string = "";


  public create() {
    this.spinner.show();
    if (this.pvCreate.path != '') {
      this.pvCreate.path = this.pvCreate.path.replace("C:\\fakepath\\", "");
      this._http.get<Array<Pv>>(this._url + '/filename/' + this.pvCreate.path + '/startCol/' + this.pvCreate.startCol + '/line/' + this.pvCreate.line + '/modsLine/' + this.pvCreate.modsLine
        + '/modsCol/' + this.pvCreate.modsCol + '/refFiliere/' + this.pvCreate.refFiliere + '/refSemestre/' + this.pvCreate.refSemestre + '/annee/' + this.pvCreate.annee).subscribe(
        data => {
          // console.clear();
          this.spinner.hide();
          this._http.get<Array<string>>(this._url + '/path/' + this.pvCreate.path + '/startCol/' + this.pvCreate.modsCol + '/line/' + this.pvCreate.modsLine).subscribe(
            data => {
              this._modules = data;
            }, error => {
              Swal.fire('Error!!!', 'please enter a valid file name!', 'error');
            }
          );
          this._pvs = data;
        }, error => {
          this.spinner.hide();
          console.log(error);
          Swal.fire('Error!!!', 'please enter a valid file name!', 'error');
        }
      );
    } else {
      Swal.fire('Error!!!', 'please enter a valid file name!', 'error');
      this.spinner.hide();
    }
  }

  public saveAll() {
    this.spinner.show();
    this.http.post<number>(this.url + '/pv/', this.pvs).subscribe(
      data => {
        this.spinner.hide();
        console.log(data);
        if (data == 1) {
          Swal.fire('done', 'Liste Sauvgardee avec succes', 'success');
          this.deleteAll();
        }else if(data == -2){
          Swal.fire('Error!!!', 'you have some errors', 'error');
        }
      }, error => {
        this.spinner.hide();
        Swal.fire('Error!!!', 'Error', 'error');
      }
    );
  }

  public findInListByCne(cne: string) {
    if(cne  == null){
      this.findByCriteria();
    }
    const filter = (mypv: Pv[]) => this.pvList.filter(mypv => mypv.refEtudiant.match("^" + cne + ".*$"));
    this.filtered = filter(this.pvList);
  }

  public findByCriteria() {
    if (this.pvListCreate.refFiliere != '' && this.pvListCreate.refSemestre != '' && this.pvListCreate.annee != '') {
      this._http.get<Array<Pv>>(this._url + '/pv/findbycriteria/refFiliere/' + this.pvListCreate.refFiliere + '/refSemestre/' + this.pvListCreate.refSemestre + '/annee/' + this.pvListCreate.annee).subscribe(
        data => {
          this.pvList = data;
          this.filtered = data;
          this.filtered.reverse();
          this.pvList.reverse();
          if (this.modulesList.length == 6) {
            this.modulesList = new Array<string>();
          }
          for (let i = 0; i <= 5; i++) {
            this.modulesList.push(this.pvList[0].noteModulaireVos[i].refModule);
          }

        }, error => {
          Swal.fire('Error!!!', 'erreur!', 'error');
        }
      );
    }
  }
  public changeValue(id: number, property: string, event: any) {
    this.updateList(id,property,event);
  }
  public updateList(id: number, property: string, event: any) {
    const editField = event.target.textContent;
    this.pvs[id][property] = editField;
    console.log(this.pvs[id]);
  }
  public updateInternList(id: number,j: number, property: string, event: any) {
    const editField = event.target.textContent;
    this.pvs[id].noteModulaireVos[j][property] = editField;
    console.log(this.pvs[id]);
  }


  public deleteAll() {
    this.pvs.splice(0, this.pvs.length);
  }
  public deleteListAll() {
    if (this.pvListCreate.cne == '') {
      this.filtered.splice(0, this.filtered.length);
    }
  }

  public deleteItem(id: number) {
    Swal.fire({
      title: 'etes vous sure??',
      text: "C'est irreversible",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      confirmButtonText: 'Supprimer'
    }).then((result) => {
      if (result.value) {
        this.pvs.splice(id, 1);
        Swal.fire(
          'Supprimé!',
          'La note supprimé avec succes.',
          'success'
        )
      }
    })

  }
  public deleteListItem(n: Pv) {
    const i: number = this.filtered.indexOf(n);
    this.filtered.splice(i, 1);
    if(this.pvListCreate.cne != ''){
      const i: number = this.pvList.indexOf(n);
      this.pvList.splice(i, 1);
    }
  }

  public findNoteSemstre(cne: string, filiere: string,semestre: string, annee: string) {
    this._noteSemSelected = new Pv('','','','','',0,'','',0,0,0,'');
    this._http.get<Pv>(this._url + '/pv/refEtudiant/' + cne + '/refFiliere/' + filiere + '/refSemestre/' + semestre + '/annee/' + annee).subscribe(
      data => {
        this._noteSemSelected = data;
        console.log(this._noteSemSelected);
      }, error => {
        console.log('error while...');
      }
    );
  }

  public edit() {
    this._http.put<Pv>('http://localhost:8097/efaculte-api-notes/notes/editNoteSemestre/', this._noteSemSelected).subscribe(
      data => {
        this.findByCriteria();
        Swal.fire('Done','updated.','success');
      }, error => {
        Swal.fire('error','erreur','warning');
        console.log('error while...');
      }
    );
  }
  public delete(noteS: Pv) {
    this._http.delete<number>(this.url+'/deleteNoteSemestre/refEtudiant/'+noteS.refEtudiant+'/refFiliere/'+noteS.refFiliere+'/refSemestre/'+noteS.refSemestre+'/annee/'+noteS.annee).subscribe(
      data => {
        this.deleteListItem(noteS);
        Swal.fire('Done','updated.','success');
      }, error => {
        Swal.fire('error','erreur','warning');
        console.log('error while...');
      }
    );
  }
  public checkType(){
    if(!this.pvCreate.path.endsWith(".xls")){
      Swal.fire('Type non compatible','Veuiller choisir un fichier .xls','warning');
      this.pvCreate.path = "";
    }
  }


  get http(): HttpClient {
    return this._http;
  }

  set http(value: HttpClient) {
    this._http = value;
  }

  get url(): string {
    return this._url;
  }

  set url(value: string) {
    this._url = value;
  }


  get pvs(): Array<Pv> {
    return this._pvs;
  }

  set pvs(value: Array<Pv>) {
    this._pvs = value;
  }

  get modules(): Array<string> {
    return this._modules;
  }

  set modules(value: Array<string>) {
    this._modules = value;
  }


  get pvCreate(): PvCreate {
    return this._pvCreate;
  }

  set pvCreate(value: PvCreate) {
    this._pvCreate = value;
  }

  get spinner(): NgxSpinnerService {
    return this._spinner;
  }

  set spinner(value: NgxSpinnerService) {
    this._spinner = value;
  }


  get pvListCreate(): PvCreate {
    return this._pvListCreate;
  }

  set pvListCreate(value: PvCreate) {
    this._pvListCreate = value;
  }

  get pvList(): Array<Pv> {
    return this._pvList;
  }

  set pvList(value: Array<Pv>) {
    this._pvList = value;
  }

  get modulesList(): Array<string> {
    return this._modulesList;
  }

  set modulesList(value: Array<string>) {
    this._modulesList = value;
  }

  get noteSemSelected(): Pv {
    return this._noteSemSelected;
  }

  set noteSemSelected(value: Pv) {
    this._noteSemSelected = value;
  }
}
