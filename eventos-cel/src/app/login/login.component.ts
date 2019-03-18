import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpService } from './../http.service';
import { StorageService } from './../storage.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EmailValidator } from '@angular/forms';
import { environment } from '../../environments/environment';
import { PegaVariavelService } from '../pegaVariavel.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  emailGlobal: string = '';

  email;

  private user: Object = {
    'email': JSON.parse(sessionStorage.getItem('email') || "[]"),
    'idEm': JSON.parse(sessionStorage.getItem('id') || "[]"),
    'id_token': JSON.parse(sessionStorage.getItem('token') || "[]"),
    'password': ''
  };

  constructor(
    private http: HttpService,
    private storage: StorageService,
    private route: ActivatedRoute,
    private router: Router,
    private pegaVariavel : PegaVariavelService
  ) {

    console.log('email: ' + this.user['email']);
    console.log('token: ' + this.user['id_token']);

  }
  ngOnInit() {
    this.pegaVariavel.eventEmailGlobal.subscribe(
    event => this.setEmailGlobal(event)
    );
  }

  setEmailGlobal(globalEmail: string) {
    this.emailGlobal = globalEmail;
  }

  login() {

    this.user['email'] = JSON.parse(sessionStorage.getItem('email'));

    this.http.post('auth/login', this.user)
      .subscribe(res => {

        swal({
          title: "Login realizado com sucesso!",
          icon: "success",
        });
        this.storage.set('token', res.token);

        sessionStorage.setItem('password', this.user['password']);

        var globalEmail = res.token;

        this.pegaVariavel.setEmailGlobal(globalEmail);

        return this.router.navigate(['']);
      });
      swal({
        title: "Usuário ou senha incorretos!",
        text: "Verifique e tente novamente",
        icon: "error",
      });
  }

}
