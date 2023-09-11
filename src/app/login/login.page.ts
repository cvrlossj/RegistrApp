import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  username: string = ''
  password: string = ''

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastController: ToastController
  ) { }


  // login() {
  //   if (this.authService.login(this.username, this.password)) {
  //     this.router.navigate(['/home'])
  //   } else {
   
  //   }
  // }
  async login() {
    if (this.authService.login(this.username, this.password)){
        this.router.navigate(['/home'])
        this.username = '';
        this.password = '';
    } else {
      const toast = await this.toastController.create({
        message: 'Usuario o contraseña inválidos',
        duration: 1000,
        color: 'danger'
      });
      await toast.present()
    }
  }

}
