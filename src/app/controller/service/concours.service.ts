import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Concours} from '../model/concours.model';

@Injectable({
  providedIn: 'root'
})
export class ConcoursService {


  constructor(private http: HttpClient) { }
  public url:string="http://localhost:8092/concours-api/concours/reference";
  public listConcours=Array<Concours>();

  public findAll(){

    this.http.get<Array<Concours>>(this.url).subscribe(
      data => {
        this.listConcours = data;
      },
      error1 => {
        console.log('error while loading elements...');
      }
    );
  }
}
