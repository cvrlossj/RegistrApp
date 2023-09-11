import { Component} from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage  {

  // Datos a tomar

  username: string = ''
  password: string = ''
  name: string = ''
  last_name: string = ''
  rut: string = ''
  career: string = ''

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastController: ToastController) { }


    async register() {
    
    if (!this.username || !this.password || !this.name || !this.last_name || !this.rut){
      const error = await this.toastController.create({
        message: 'Por favor, complete todos los campos.',
        duration: 1000,
        color: 'danger'
      });
      await error.present();
      return
    }
    
    console.log('carrera seleccionada:', this.career);
    if (this.authService.register(this.username, this.password, this.name, this.last_name, this.rut, this.career)){
        const registro = await this.toastController.create({
          message: '¡Registro éxitoso!',
          duration: 1000,
          color: 'success'
        })
        await registro.present()
        this.router.navigate(['/home'])
    } else {
      const error = await this.toastController.create({
        message: 'Problemas al crear un usuario',
        duration: 1000,
        color: 'danger'
      });
      await error.present()
    }
  }


}
