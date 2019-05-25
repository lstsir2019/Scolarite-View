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
  private _pvCreate: PvCreate = new PvCreate('', '3', '0', '1', '3', '', '', false);
  private _pvs: Array<Pv>;
  private _modules: Array<string>;
  private _notesModulaires: Array<NoteEtudiantModule>;
  public showProg: boolean = false;

  public create() {
    this.spinner.show();
    if (this.pvCreate.path != '') {
      this.pvCreate.path = this.pvCreate.path.replace("C:\\fakepath\\", "");
      this._http.get<Array<Pv>>(this._url + '/filename/' + this.pvCreate.path + '/startCol/' + this.pvCreate.startCol + '/line/' + this.pvCreate.line + '/modsLine/' + this.pvCreate.modsLine
        + '/modsCol/' + this.pvCreate.modsCol + '/refFiliere/' + this.pvCreate.refFiliere + '/refSemestre/' + this.pvCreate.refSemestre).subscribe(
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
      this._http.post<number>(this.url +'/pv/', this.pvs).subscribe(
        data => {
          if(data > 1){
            Swal.fire('done','Liste Sauvgardee','success');
          }
        }, error => {
          Swal.fire('Error!!!', 'Error', 'error');
        }
      );

  }


  public deleteAll() {
    this.pvs.splice(0, this.pvs.length);
  }

  public deleteItem(n: Pv) {
    const id: number = this.pvs.indexOf(n);
    this.pvs.splice(id, 1);
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


}
