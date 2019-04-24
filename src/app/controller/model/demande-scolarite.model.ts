export class DemandeScolarite {

  public DemandeScolariteVos = Array<DemandeScolarite>();


  constructor(public refEtudiant:string,public refFiliere:string, public nom:string, public prenom:string, public email:string) {}
}
