import { Component} from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

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
    private router: Router) { }

    register(){
      this.authService.register(this.username, this.password, this.name, this.last_name, this.rut, this.career)
      this.router.navigate(['/login'])
    }


}
