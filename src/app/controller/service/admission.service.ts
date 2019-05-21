import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Candidat} from "../model/candidat.model";
import {CandidatService} from "./candidat.service";
import {RetenueEcrit} from "../model/retenue-ecrit.model";

@Injectable({
  providedIn: 'root'
})
export class AdmissionService {
  constructor(public http: HttpClient) {
  }

  public url: string = 'http://localhost:8090/admission/retenus/';
  public listCandidats: Array<RetenueEcrit> = [];
  public listCandidatsSelected: Array<RetenueEcrit> = [];

  public findListeReteues(refence: string) {
    this.http.get<Array<RetenueEcrit>>(this.url + refence).subscribe(
      data => {
        console.log(refence );
        if(data==null){
          this.listCandidats=[];
          this.listCandidatsSelected=[];
        }else{
          this.listCandidats = data;
          for (let i = 0; i < this.listCandidats.length; i++) {
            if (this.listCandidats[i].preselectione == true) {
              this.listCandidatsSelected.push(this.listCandidats[i]);
            }
          }
        }
      },
      error1 => {
        console.log('error while loading elements...');
      }
    );
  }
  public saveListeReteues(listeRetenue:Array<RetenueEcrit>){
    this.http.post(this.url,listeRetenue).subscribe(
      data=>{
        console.log('haha');
      },error1 => {
        console.log('hihi');
      }
    )
  }
}
