import { inject } from "@angular/core";
import { Router } from "@angular/router";



export const logeado = () => {

    const router = inject(Router);

    if (localStorage.getItem('currentUser')) {
        return true;
    } else {
        console.log('Debes loguearte primero');
        
        router.navigate(['/login']);
        return false;

    }
}