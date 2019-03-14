import { Component, OnInit, Output } from '@angular/core';
import { HttpService } from './../http.service';
import { StorageService } from './../storage.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EmailValidator } from '@angular/forms';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  //@Output()

  option = 'Entre';

  email=null;

  private user: Object = {

    'email': JSON.parse(sessionStorage.getItem('email')),
    'idEm': JSON.parse(sessionStorage.getItem('id')),
    'token': JSON.parse(sessionStorage.getItem('token')),
    'password': ''
  };

  constructor(
    private http: HttpService,
    private storage: StorageService,
    private route: ActivatedRoute,
    private router: Router
  ) {

    console.log('email: ' + this.user['email']);
    console.log('id: ' + this.user['idEm']);
    console.log('token: ' + this.user['token']);

  }
  ngOnInit() {}

  login() {
    this.user['email'] = JSON.parse(sessionStorage.getItem('email'));
    console.log(this.user['email']);
      this.http.post('auth/login', this.user)
      .subscribe(res => {

        swal({
          title: "Login realizado com sucesso!",
          icon: "success",
        });
      });

      this.option = 'Logado';
  }
  onSignIn(googleUser) {

    let profile = googleUser.getBasicProfile();
    let id_token = googleUser.getAuthResponse().id_token;

    let email = profile.getEmail();
    let id = profile.getId();
    let nomeCompleto = profile.getName();
    let nome = profile.getGivenName();

    let emailPerfil = JSON.stringify(email);
    let idPerfil = JSON.stringify(id);
    let nomeCompletoPerfil = JSON.stringify(nomeCompleto);
    let nomePerfil = JSON.stringify(nome);
    let token = JSON.stringify(id_token);
  }

}
