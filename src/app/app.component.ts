import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AuthenticationService} from './controller/Auth/authentication.service';
import {User} from './controller/model/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'inscription-api';
  constructor(public route: ActivatedRoute,public auth:AuthenticationService) { }

  ngOnInit(): void {
    this.auth.isAuth=localStorage.getItem("currentUser")
  }
}
