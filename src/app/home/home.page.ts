import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  user: any;

  constructor(
    private authService: AuthService,
    private router: Router) {}

  ngOnInit() {
    const userData = localStorage.getItem('currentUser');

    if (userData){
      this.user = JSON.parse(userData);
    }
  }  

  logout(){
    this.authService.logout();
    if(this.router){
      this.router.navigate(['/login']);
    }
  }

  

}