import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../controller/Auth/authentication.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService) {
  }

  private auth: string;

  ngOnInit() {
    this.auth = this.authenticationService.isAuth;
    if(!this.auth){
      this.authenticationService.statue="Se Connecter"
    }else{
      this.authenticationService.statue="déconnexion"
    }
  }
public logOut(){
    if(this.statue.match("déconnexion")){

      Swal.fire({
        title: 'Déconnexion',
        text: "Voulez vous vraiment se déconnecter!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Se deconnecter!',
        cancelButtonText:"Annuller"
      }).then((result) => {
        if (result.value) {

        this.authenticationService.clear();
        }
      })
    }

}
public get statue(){
    return this.authenticationService.statue;
}
}
