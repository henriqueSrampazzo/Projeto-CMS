import { Component, OnInit } from '@angular/core';

import { HttpService } from './../http.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  private user: Object = {
    name: '',
    email: '',
    username: '',
    password: ''
  };

  constructor(private http: HttpService) { }

  ngOnInit() {
  }

  signup() {
    this.http.post('users', this.user)
             .subscribe(res => {
               //toastr.success(res.msg, 'Sucesso');
               alert('Cadastrado com sucesso');

             });
  }

}
