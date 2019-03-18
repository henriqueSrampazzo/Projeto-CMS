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

    this.http.post('auth/login', this.user)

      .subscribe(res => {

        // var lula = res.msg;
        // console.log(lula);
        // swal({
        //   title: "Login realizado com sucesso!",
        //   icon: "success",
        // });


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
