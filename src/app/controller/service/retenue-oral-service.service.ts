import { Injectable } from '@angular/core';
import {RetenueEcrit} from '../model/retenue-ecrit.model';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RetenueOralServiceService {
  //hadu li legit dial lview
  public listRetenueOralInBd: Array<RetenueEcrit> = [];
  public filteredRetenueOral: Array<RetenueEcrit> = [];
  public listeRetenueFinal:Array<RetenueEcrit>=[];
  public listeRetenueFinalSelected:Array<RetenueEcrit>=[];

  public url: string = 'http://localhost:8091/admission/retenus/';

  constructor(private http:HttpClient) { }

  public findListeReteuesFinal(refence: string) {
    this.listeRetenueFinal = [];
    this.listeRetenueFinalSelected = [];
    this.http.get<Array<RetenueEcrit>>(this.url + "liste_admis/"+refence).subscribe(

      data => {
        console.log(data);
        if (data == null) {
          this.listeRetenueFinal = [];
          this.listeRetenueFinalSelected = [];
        } else {
          this.listeRetenueFinal = data;
          for (let i = 0; i < this.listeRetenueFinal.length; i++) {
            if (this.listeRetenueFinal[i].admis == true) {
              this.listeRetenueFinalSelected.push(this.listeRetenueFinal[i]);
            }
          }
        }
      },
      error1 => {
        console.log('error while loading elements...');
      }
    );
  }
  applyFilter(refCandidat: string) {
    if (refCandidat == null) {
      this.filteredRetenueOral = this.listRetenueOralInBd;
    } else {
      const filter = (note: RetenueEcrit[]) => this.listRetenueOralInBd.filter(retenueOral => retenueOral.refCandidat.match("^" + refCandidat + ".*$"));
      this.filteredRetenueOral = filter(this.listRetenueOralInBd);
    }


  }
  public findlisteRetenueInBd(reference: string) {
    this.http.get<Array<RetenueEcrit>>(this.url + "retenue_oral/BdListe/" + reference).subscribe(
      data => {
        this.listRetenueOralInBd = data;
        this.filteredRetenueOral = data;
        console.log(reference);
      }, error1 =>
        console.log(error1))
  }

  public saveListeReteuesFinal(listeRetenue: Array<RetenueEcrit>, refConcours: string) {
    for (var i = 0; i < listeRetenue.length; i++) {
      listeRetenue[i].refConcours= refConcours;
    }
    this.http.post(this.url + "admis/save/", listeRetenue).subscribe(
      data => {
        console.log('haha');
      }, error1 => {
        console.log('hihi');
      }
    )
  }
  public print(reference: string): any {
    const httpOptions = {
      responseType: 'blob' as 'json' //This also worked
    };
    return this.http.get(this.url + 'retenue_Oral/pdf/' + reference, httpOptions).subscribe((resultBlob: Blob) => {
      var downloadURL = URL.createObjectURL(resultBlob);
      window.open(downloadURL);
    });
  }
}
