import { StorageService } from '../storage.service';
import { Injectable, Component, OnInit, Input, Pipe } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { PegaVariavelService } from '../pegaVariavel.service';
import { HttpService } from '../http.service';

@Injectable()
export class AuthGuard2 implements CanActivate, OnInit {

  userNivel: string = '';

  constructor(
    private storage: StorageService,
    private router: Router,
    private http: HttpService,
    private pegaVariavel: PegaVariavelService
  ) {
  }

  ngOnInit() {
    this.pegaVariavel.userNivelGlobal.subscribe(
      event => this.setUserNivel(event)
    );

    var nivel = this.pegaVariavel['userNivel'];

    console.log(this.pegaVariavel['userNivel']);

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if (this.storage.get('token')) {
      if (((this.pegaVariavel['userNivel']) == 'admin')) {
        return true;
      }
      else {
        swal({
          title: "Você não tem poder aqui!",
          text: "Página exclusiva para administradores.",
          icon: "error",
        });
        return false;
      }

    }
    else {
      this.router.navigate(['/login']);
      return false;
    }
  }

  setUserNivel(lvl: string) {
    this.userNivel = lvl;
  }
}