import { Component, OnInit} from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { LocationService } from '../services/location.service';
import { Region } from '../models/region';
import { Comuna } from '../models/comuna';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  // Datos a tomar

  username: string = ''
  password: string = ''
  name: string = ''
  last_name: string = ''
  rut: string = ''
  career: string = ''

  // Desde api

  regiones:Region[]=[];
  comunas:Comuna[]=[];
  regionSelect:number = 0;
  comunaSelect:number = 0;

  disabledComuna:boolean = true;

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastController: ToastController,
    private locationService:LocationService
    ) { }

    ngOnInit() {
      this.cargarRegion();
    }


    // Cargar la región desde la api
    async cargarRegion(){
      const req = await this.locationService.getRegion();
      this.regiones = req.data;

      console.log("REGIONES",this.regiones);
    }

    // Cargar las comunas desde una región
    async cargarComuna(){
      try{
        const req = await this.locationService.getComuna(this.regionSelect);
        this.comunas = req.data;
        this.disabledComuna = false;
      } catch {
        const error = await this.toastController.create({
          message: 'Error',
          duration: 1000,
          color: 'danger'
        });
        await error.present();
        return
      }
    }


    //Registrarse
    async register() {
    
    if (!this.username || !this.password || !this.name || !this.last_name || !this.rut ||!this.regionSelect ||!this.comunaSelect){
      const error = await this.toastController.create({
        message: 'Por favor, complete todos los campos.',
        duration: 1000,
        color: 'danger'
      });
      await error.present();
      return
    } 
    
    if (this.authService.register(this.username, this.password, this.name, this.last_name, this.rut, this.career, this.regionSelect, this.comunaSelect)){
        const registro = await this.toastController.create({
          message: '¡Registro éxitoso!',
          duration: 1000,
          color: 'success'
        })
        await registro.present()
        this.router.navigate(['/login'])
    } else {
      const error = await this.toastController.create({
        message: 'Problemas al crear un usuario',
        duration: 1000,
        color: 'danger'
      });
      await error.present()
    }
  }

  volver(){
    window.history.back();
  }


}
