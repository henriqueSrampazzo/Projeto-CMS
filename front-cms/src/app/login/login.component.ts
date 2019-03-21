import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpService } from './../http.service';
import { StorageService } from './../storage.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import swal from 'sweetalert';
import { PegaVariavelService } from '../pegaVariavel.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  emailGlobal: string = '';
  userNivel: string = '';
  email;
  nivel;

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
  ) { }

  ngOnInit() {
    this.pegaVariavel.eventEmailGlobal.subscribe(
      event => this.setEmailGlobal(event)
    );

    this.pegaVariavel.userNivelGlobal.subscribe(
      event => this.setUserNivel(event)
    );

    if (sessionStorage.length == 0) {

      Swal.fire({
        title: 'Faça Login com sua conta do Google',
        type: 'warning',
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        cancelButtonText: '<a style="color: white">Voltar</a>',
        cancelButtonColor: '#d33',
        confirmButtonColor: '#ffffff00',
        confirmButtonText: '<a class="g-signin2 tst " data-onsuccess="onSignIn"></a>',
      }).then((result) => {

        if (result.value) {

          swal({
            title: 'Seu e-mail será usado para fazer login',
            icon: 'info',
            text: 'Clique em OK para confirmar',
            dangerMode: true,
            buttons: ['Cancelar', 'Ok']
          })

            .then((willDelete) => {

              if (willDelete) {
                window.location.reload();

              } else {

                this.router.navigate(['/']);

              }

            });
        } else {

          this.router.navigate(['/']);

        }

      })
    }
  }

  setEmailGlobal(globalEmail: string) {
    this.emailGlobal = globalEmail;
  }

  setUserNivel(nivelUser: string) {
    this.userNivel = nivelUser;
  }

  login() {

    this.http.post('auth/login', this.user)

      .subscribe(res => {

        Swal.fire({
          title: 'Logado com sucesso!',
          type: 'success',
          showConfirmButton: false,
          timer: 1500
        })

        this.storage.set('token', res.token);

        var globalEmail = res.token;
        var nivelUser = res.nivel;

        this.pegaVariavel.setEmailGlobal(globalEmail);
        this.pegaVariavel.setUserNivel(nivelUser);

        return this.router.navigate(['']);

      });

    this.alerta();
  }

  alerta() {

    Swal.fire({
      title: 'Verificando...',
      type: 'info',
      timer: 2000,
      showConfirmButton: false,

    }).then(() => {
      Swal.fire({
        title: 'Algo errado aconteceu!',
        text: "Verifique sua conta e tente novamente",
        type: 'error',
        timer: 2500,
        showConfirmButton: true,
      });
    });

  }

}
