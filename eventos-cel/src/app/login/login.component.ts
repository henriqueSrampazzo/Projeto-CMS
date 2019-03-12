import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { StorageService } from './../storage.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private user: Object = {

    'email': '1',
    'password': '1',

    // 'email':JSON.parse(sessionStorage.getItem('token')),
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
  ngOnInit() {

  }

  login() {
    this.http.post('auth/login', this.user)
      .subscribe(res => {
        this.storage.set('token', res.token);
        this.route.queryParams.subscribe(params => {

          if (params.to == 'subscription_confirm') {
            return this.router.navigate(['/make-subscription']);
          } else {
            return this.router.navigate(['']);
          }
        });

      });
  }

}
