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

    // 'email': '1',
    // 'password': '1',

     'email': ''
    // 'password':JSON.parse(sessionStorage.getItem('id')),

  };

  constructor(
    private http: HttpService,
    private storage: StorageService,
    private route: ActivatedRoute,
    private router: Router
  ) {

    console.log('email  : ' + this.user['email']);
    console.log('id ' + this.user['id']);
    console.log('token  : ' + this.user['token']);


  }
  ngOnInit() {}

  login() {
    this.user['email'] = JSON.parse(sessionStorage.getItem('email'));
    console.log(this.user['email']);
      this.http.post('auth/login', this.user)
      .subscribe(res => {
        this.storage.set('token', res.token);
        this.route.queryParams.subscribe(params => {

          if (params.to == 'subscription_confirm') {
            return this.router.navigate(['/make-subscription']);
          } else {
            return this. router.navigate(['']);
          }
        });
      });

      this.option = 'Logado';
  }

}
