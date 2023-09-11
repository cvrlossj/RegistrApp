import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

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
    private router: Router
  ) { }


  login() {
    if (this.authService.login(this.username, this.password)) {
      this.router.navigate(['/home'])
    } else {
      // Mostrar mensaje de error
    }
  }
}
