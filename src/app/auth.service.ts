import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  register(username: string, password: string, name: string, last_name: string, rut: string, career: string) {
    const users = JSON.parse(localStorage.getItem('users') || '[]');

    const userExists = users.some((u: any) => u.username === username);
    if(userExists){
      alert('El usuario ya existe. Por favor, elija otro usuario')
      return false;
    }
    users.push({ username, password, name, last_name, rut, career });
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

  logout(){
    localStorage.removeItem('currentUser')
  }
}
