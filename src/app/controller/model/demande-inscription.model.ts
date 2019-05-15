export class DemandeInscription {

  public DemandeInscriptionVos = Array<DemandeInscription>();


  constructor(public refEtudiant:string,public refFiliere:string, public nom:string, public prenom:string, public email:string, public cin: string) {}
}
