import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Candidat} from '../controller/model/candidat.model';
import {CandidatService} from '../controller/service/candidat.service';
import {Choix} from '../controller/model/choix.model';
import {ConcoursService} from '../controller/service/concours.service';
import {NoteSemestre} from '../controller/model/note-semestre.model';

@Component({
  selector: 'app-etudiant-create',
  templateUrl: './etudiant-create.component.html',
  styleUrls: ['./etudiant-create.component.css']
})
export class CandidatCreateComponent implements OnInit {
  today: number = Date.now();
  title = 'materialApp';
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder, public etudiantService: CandidatService, public concoursService: ConcoursService) {
  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.nullValidator]
    });
    this.concoursService.findAll();
  }
  public listAvailable: Array<String>=["1","2","3","4"];
  public etudiant: Candidat = new Candidat('', '', '', '', '', '', '',"","","");
  public list: Array<NoteSemestre> = [];
  public listDiplome: Array<string> = [];

  public choix: Choix = new Choix('', '');
  private c: number;

  public saveEtudiant() {
    this.etudiant.notesSemestreVos = this.list;
    this.etudiantService.create(this.etudiant);
  }

  public get concourss() {
    return this.concoursService.listConcours;
  }

  public pushChoix() {
    this.listAvailable.splice(this.listAvailable.indexOf(this.choix.numChoix),1);
     this.etudiantService.pushChoix(this.etudiant, this.choix);
     this.choix = new Choix("","");
  }

  public deleteChoix(choix: Choix) {
    this.listAvailable.push(choix.numChoix);
    this.listAvailable.sort();
    return this.etudiantService.removeChoix(this.etudiant, choix);
  }

  public get nextyear() {
    this.c = this.today + 31556926000;
    return this.c;
  }

  public initializeListeNotes() {
    if (this.etudiant.niveau == 'Bac+2') {
      this.list = [new NoteSemestre('Semestre 1', ''), new NoteSemestre('Semestre 2', '')
        , new NoteSemestre('Semestre 3', ''), new NoteSemestre('Semestre 4', '')];
      this.listDiplome=["DUT","DEUG","DEUST","CPGE","BTS","AUTRE "]
    }
    else if (this.etudiant.niveau == 'Bac+3') {
      this.list = [new NoteSemestre('Semestre 1', ''), new NoteSemestre('Semestre 2', '')
        , new NoteSemestre('Semestre 3', ''), new NoteSemestre('Semestre 4', ''),
        new NoteSemestre('Semestre 5', ''), new NoteSemestre('Semestre 6', '')];
      this.listDiplome=["LST SIR","LST MIASI","LST IEEA","AUTRE"]
    }
  }

}


