import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private toastController: ToastController) { }

  register(username: string, password: string, name: string, last_name: string, rut: string, career: string, regionSelect: number, comunaSelect: number ) {
    const users = JSON.parse(localStorage.getItem('users') || '[]');

    const userExists = users.some((u: any) => u.username === username);
    if(userExists){
      alert('El usuario ya existe. Por favor, elija otro usuario')
        return false;
    }
    users.push({ username, password, name, last_name, rut, career, regionSelect, comunaSelect });
    localStorage.setItem('users', JSON.stringify(users));

    return true;
  }

  

  // [ Inicio de sesión - LocalStorage]

  login(username: string, password: string): boolean {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find((u: any) => u.username === username && u.password === password);
    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user));
      return true;
    }
    return false;
  }

  recoverPassword(username: string, newPassword: string): boolean {
    const users = JSON.parse(localStorage.getItem('users') || '[]');

    const userIndex = users.findIndex((u: any) => u.username === username);

    if (userIndex !== -1) {
      // Actualiza la contraseña para el usuario encontrado
      users[userIndex].password = newPassword;
      localStorage.setItem('users', JSON.stringify(users));

      this.presentToast('Contraseña recuperada con éxito.');
      return true;
    } else {
      this.presentToast('El usuario no existe.');
      return false;
    }
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
    });
    toast.present();
  }




  logout(){
    localStorage.removeItem('currentUser')
  }
}
