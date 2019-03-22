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

  aguardando = false;

  ngOnInit() {

  }

  signup() {
    this.http.post('contato', this.user)
      .subscribe(res => {

        swal({
          title: "Mensagem enviada com sucesso!",
          text: "Em breve um administrador entrará em contato com você",
          icon: "success",
        });

        this.aguardando = false;

      });
  }

  aguardar() {
    this.aguardando = true;
  }

}