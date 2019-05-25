import {CoefModuleConcours} from './coef-module-concours.model';


export class ModuleConcours {
  constructor( public reference: string, public coefModuleConcoursVo : CoefModuleConcours = new CoefModuleConcours( ""),public id:number){}

}
