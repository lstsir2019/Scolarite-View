import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpEvent, HttpHandler, HttpRequest} from '@angular/common/http';
import {User} from '../controller/model/user.model';
import {Observable} from 'rxjs';
import {AuthenticationService} from '../controller/Auth/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService) {
  }

  ngOnInit() {
    console.log(localStorage);
  }

  public user: User = new User(0, '', '', '', '', '', false, '');

  public login() {
    this.authenticationService.login(this.user);
  }


}
