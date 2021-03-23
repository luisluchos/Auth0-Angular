import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {

  login:boolean= false

  constructor(public auth: AuthService) {
    auth.isAuthenticated$.subscribe(data => this.login = data) //hide or show when we are login
    console.log("login",this.login);
    
    

  
   }

  ngOnInit(): void {
  }

  

}
