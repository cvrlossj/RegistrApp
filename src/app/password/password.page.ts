import { Component} from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-password',
  templateUrl: './password.page.html',
  styleUrls: ['./password.page.scss'],
})
export class PasswordPage {

  username: string = '';
  newPassword: string = '';

  constructor(private authService: AuthService) { }

  recoverPassword(){
    this.authService.recoverPassword(this.username, this.newPassword);
  }

  volver(){
    window.history.back();
  }

}
