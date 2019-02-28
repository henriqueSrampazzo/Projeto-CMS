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
    'email': '',
    'password': ''
  };

  constructor(
    private http: HttpService,
    private storage: StorageService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

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
                  return this.router.navigate(['/painel']);
                }
              });

            });
  }
}
