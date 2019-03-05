import { Component, OnInit } from '@angular/core';

import { HttpService } from './../http.service';


@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  private user: Object = {
    
    nome: '',
    email: '',
    mensagem: ''
  };

  constructor(private http: HttpService) { }

  ngOnInit() {
  }

  signup() {
    this.http.post('contato', this.user)
             .subscribe(res => {
               alert('Mensagem enviada com sucesso!');
             });
  }

}
