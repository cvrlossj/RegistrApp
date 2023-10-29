import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  

  latitude: number=0;
  longitude: number=0;

  user: any;

  constructor(
    private authService: AuthService,
    private router: Router) {}

  ngOnInit() {
    this.getCurrentLocation();
    const userData = localStorage.getItem('currentUser');

    if (userData){
      this.user = JSON.parse(userData);
    }
  }
  
  async getCurrentLocation() {
    const coordenadas = await Geolocation.getCurrentPosition();
    this.latitude = coordenadas.coords.latitude;
    this.longitude = coordenadas.coords.longitude;
  }


  logout(){
    this.authService.logout();
    if(this.router){
      this.router.navigate(['/login']);
    }
  }

  

}