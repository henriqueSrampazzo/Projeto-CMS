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
  
  option = 'Entre';

  email=null;

  private user: Object = {

    'email': JSON.parse(sessionStorage.getItem('email')),
    'idEm': JSON.parse(sessionStorage.getItem('id')),
    'id_token': JSON.parse(sessionStorage.getItem('token')),
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
  ngOnInit() {}

  login() {
    this.user['email'] = JSON.parse(sessionStorage.getItem('email'));

    this.http.post('auth/login', this.user)
      .subscribe(res => {

        swal({
          title: "Login realizado com sucesso!",
          icon: "success",
        });
        this.storage.set('token', res.token);

        return this.router.navigate(['']);

      });
      swal({
        title: "Usuário ou senha incorretos!",
        text: "Verifique e tente novamente",
        icon: "error",
      });

      this.option = 'Logado';
  }

}
