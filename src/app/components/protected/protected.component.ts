import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-protected',
  templateUrl: './protected.component.html',
  styleUrls: ['./protected.component.scss']
})
export class ProtectedComponent implements OnInit {
  userAuth:any
  
  constructor(public auth : AuthService) {
   
    this.auth.user$.subscribe(data => {
      this.userAuth = data
      console.log(this.userAuth);
    } 
      );

    
    
   }

  ngOnInit(): void {
  }

}
