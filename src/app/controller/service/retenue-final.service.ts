import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RetenueEcrit} from '../model/retenue-ecrit.model';

@Injectable({
  providedIn: 'root'
})
export class RetenueFinalService {
  //hadu li legit dial lview
  public listRetenueFinalInBd: Array<RetenueEcrit> = [];
  public filteredRetenueFinalInBd: Array<RetenueEcrit> = [];


  public url: string = 'http://localhost:8091/admission/retenus/';

  constructor(private http:HttpClient) { }
  applyFilter(refCandidat: string) {
    if (refCandidat == null) {
      this.filteredRetenueFinalInBd = this.listRetenueFinalInBd;
    } else {
      const filter = (note: RetenueEcrit[]) => this.listRetenueFinalInBd.filter(retenue => retenue.refCandidat.match("^" + refCandidat + ".*$"));
      this.filteredRetenueFinalInBd = filter(this.listRetenueFinalInBd);
    }
  }
  public findlisteRetenueInBd(reference: string) {
    this.http.get<Array<RetenueEcrit>>(this.url + "liste_admis/BdListe/"+ reference).subscribe(
      data => {
        this.filteredRetenueFinalInBd = data;
        this.listRetenueFinalInBd = data;
        console.log(reference);
      }, error1 =>
        console.log(error1))
  }


  public print(reference: string): any {
    const httpOptions = {
      responseType: 'blob' as 'json' //This also worked
    };
    return this.http.get(this.url + 'retenue_final/pdf/' + reference, httpOptions).subscribe((resultBlob: Blob) => {
      var downloadURL = URL.createObjectURL(resultBlob);
      window.open(downloadURL);
    });
  }
}
