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
            return this.router.navigate(['']);
          }
        });

      });
  }

   onSignIn(googleUser) {
    // Useful data for your client-side scripts:
    var profile = googleUser.getBasicProfile();
    console.log("ID: " + profile.getId());
    console.log('Nome completo: ' + profile.getName());
    console.log('Nome: ' + profile.getGivenName());
    console.log('Família: ' + profile.getFamilyName());
    console.log("URL da Imagem: " + profile.getImageUrl());
    console.log("Email: " + profile.getEmail());

    // The ID token you need to pass to your backend:
    var id_token = googleUser.getAuthResponse().id_token;
    console.log("ID Token: " + id_token);
   }
}
