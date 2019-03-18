import { Component, OnInit, Output } from '@angular/core';
import { HttpService } from './../http.service';
import { StorageService } from './../storage.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private user: Object = {
    'email': JSON.parse(sessionStorage.getItem('email') || "[]"),
    'id_token': JSON.parse(sessionStorage.getItem('token') || "[]"),
    'password': ''
  };

  constructor(
    private http: HttpService,
    private storage: StorageService,
    private route: ActivatedRoute,
    private router: Router
  ) {

    console.log('email: ' + this.user['email']);
    console.log('token: ' + this.user['id_token']);

  }

  ngOnInit() { }

  login() {

    this.http.post('auth/login', this.user)

      .subscribe(res => {

        var lula = res.msg;
        console.log(lula);

        Swal.fire({
          title: 'Logado com sucesso!',
          type: 'success',
          showConfirmButton: false,
          timer: 1500
        })

        this.storage.set('token', res.token);
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
