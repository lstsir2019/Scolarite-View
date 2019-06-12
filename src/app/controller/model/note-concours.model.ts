import {RetenueEcrit} from "./retenue-ecrit.model";

export class NoteConcours {
  public retenueEcritVo=new RetenueEcrit('',false,'','',false,false)
  constructor(public noteEcrit:string ,public noteOral:string){}
}
