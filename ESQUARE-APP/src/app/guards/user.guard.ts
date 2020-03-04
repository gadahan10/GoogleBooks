import { Injectable } from '@angular/core';

import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class UserGuard implements CanActivate {


    constructor(private router: Router) { }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean {

        var username = sessionStorage.getItem('username');    

        if (username != null && username.length > 3) {
            return true;
        }

        this.router.navigateByUrl('/welcome');

        return false;
    }
}