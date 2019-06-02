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
  public url: string = 'http://localhost:8091/admission/retenus/';
  public listCandidats: Array<RetenueEcrit> = [];
  public listCandidatsSelected: Array<RetenueEcrit> = [];
  public listRetenueInBd: Array<RetenueEcrit> = [];
  public filteredRetenueEcrit: Array<RetenueEcrit> = [];
  public listRetenueOralInBd: Array<RetenueEcrit> = [];
  public listRetenueOral: Array<RetenueEcrit> = [];
  public listRetenueOralSelected: Array<RetenueEcrit> = [];

  public findListeReteues(refence: string) {
    this.http.get<Array<RetenueEcrit>>(this.url + refence).subscribe(
      data => {
        console.log(refence);
        if (data == null) {
          this.listCandidats = [];
          this.listCandidatsSelected = [];
        } else {
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
  public findListeReteuesOral(refence: string) {
    this.http.get<Array<RetenueEcrit>>(this.url + "/retenue_oral/"+refence).subscribe(
      data => {
        console.log(refence);
        if (data == null) {
          this.listRetenueOral = [];
          this.listRetenueOralSelected=[];
        } else {
          this.listRetenueOral = data;
          console.log(data);
          for (let i = 0; i < this.listRetenueOral.length; i++) {
            if (this.listRetenueOral[i].retenueOral == true) {
              this.listRetenueOralSelected.push(this.listRetenueOral[i]);
            }
          }
        }console.log(this.listRetenueOralSelected)
      },
      error1 => {
        console.log('error while loading elements...');
      }
    );
  }

  public saveListeReteues(listeRetenue: Array<RetenueEcrit>, refConcours: string) {
    for (var i = 0; i < listeRetenue.length; i++) {
      listeRetenue[i].refConcours=refConcours;
    }
    this.http.post(this.url + "preselection", listeRetenue).subscribe(
      data => {
        console.log('haha');
      }, error1 => {
        console.log('hihi');
      }
    )
  }

  applyFilter(refCandidat: string) {
    if (refCandidat == null) {
      this.filteredRetenueEcrit = this.listRetenueInBd;
    } else {
      const filter = (note: RetenueEcrit[]) => this.listRetenueInBd.filter(retenue => retenue.refCandidat.match("^" + refCandidat + ".*$"));
      this.filteredRetenueEcrit = filter(this.listRetenueInBd);
    }


  }

  public findRetenueByRefConcours(reference: string) {
    this.http.get<Array<RetenueEcrit>>(this.url + "list_retenues/" + reference).subscribe(
      data => {
        this.filteredRetenueEcrit = data;
        this.listRetenueInBd = data;
        console.log(data);
      }, error1 =>
        console.log(error1))
  }

  public print(reference: string): any {
    const httpOptions = {
      responseType: 'blob' as 'json' //This also worked
    };
    return this.http.get(this.url + 'retenue_ecrit/pdf/' + reference, httpOptions).subscribe((resultBlob: Blob) => {
      var downloadURL = URL.createObjectURL(resultBlob);
      window.open(downloadURL);
    });
  }
}
