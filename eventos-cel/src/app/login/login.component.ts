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

   onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.

    console.log("/*/*/*");

  }
  


  // signOut() {

  //   var auth2 = gapi.auth2.getAuthInstance();
  //   auth2.signOut().then(function () {
  //     console.log('User signed out.');
  //   });
  // }


}
