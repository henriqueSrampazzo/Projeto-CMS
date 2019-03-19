import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpService } from './../http.service';
import { StorageService } from './../storage.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
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

  checado = false;

  private user: Object = {
    'email': JSON.parse(sessionStorage.getItem('email') || "[]"),
    'id_token': JSON.parse(sessionStorage.getItem('token') || "[]"),
    'password': ''
  };

  constructor(
    private http: HttpService,
    private storage: StorageService,
    private route: ActivatedRoute,
    private router: Router,
    private pegaVariavel: PegaVariavelService
  ) {

    console.log('email: ' + this.user['email']);
    console.log('token: ' + this.user['id_token']);

  }
  ngOnInit() {
    this.pegaVariavel.eventEmailGlobal.subscribe(
      event => this.setEmailGlobal(event)
    );

    if (sessionStorage.length == 0) {

      Swal.fire({
        title: 'Faça Login com sua conta do Google',
        type: 'warning',
        showCancelButton: true,
        cancelButtonText: '<a href="/" style=" text-decoration:none;color: white">Voltar</a>',
        confirmButtonColor: 'white',
        cancelButtonColor: '#d33',
        confirmButtonText: '<a class="g-signin2" data-onsuccess="onSignIn">Login</a>',
      }).then((result) => {

        if (result.value) {

          Swal.fire({
            title: 'Atenção',
            type: 'info',
            text: 'Seu e-mail será usado para fazer login',
            showCloseButton: true,
            showCancelButton: true,
            focusConfirm: false,
            confirmButtonText: '<a href="/login"style="text-decoration:none; color: white">Aceitar</a> ',
            cancelButtonText: '<a href="/login" style="text-decoration:none; color: white">Cancelar</a>',
          })
        }
      })
    }
  }

  setEmailGlobal(globalEmail: string) {
    this.emailGlobal = globalEmail;
  }

  login() {

    this.http.post('auth/login', this.user)

      .subscribe(res => {
        
        console.log(res);
        
        Swal.fire({
          title: 'Logado com sucesso!',
          type: 'success',
          showConfirmButton: false,
          timer: 1500
        })

        this.storage.set('token', res.token);

        var globalEmail = res.token;

        this.pegaVariavel.setEmailGlobal(globalEmail);

        return this.router.navigate(['']);

      });

    this.alerta();
  }

  alerta() {

    Swal.fire({
      title: 'Verificando...',
      type: 'info',
      timer: 1500,
      showConfirmButton: false,

    }).then(() => {
      Swal.fire({
        title: 'Usuário ou senha incorretos!',
        text: "Verifique e tente novamente",
        type: 'error',
        timer: 2000,
        showConfirmButton: true,
      });
    });

  }

}
