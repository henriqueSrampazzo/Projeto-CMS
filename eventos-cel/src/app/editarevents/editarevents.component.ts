import { Component, OnInit, Input, Output, EventEmitter, Injectable } from '@angular/core';
import { HttpService } from '../http.service';
import { StorageService } from '../storage.service';
import { PegaVariavelService } from '../pegaVariavel.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router'; 

@Component({
  selector: 'app-editarevents',
  templateUrl: './editarevents.component.html',
  styleUrls: ['./editarevents.component.css']
})
@Injectable() export class EditarEventsComponent implements OnInit {

  emailGlobal: string = '';
  userNivel: string = '';

  private events: Array<{}>;
  p: number = 100;

  constructor(
    public http: HttpService,
    private storage: StorageService,
    private pegaVariavel: PegaVariavelService,
    private router: Router,
  ) { }

  ngOnInit() {

    this.pegaVariavel.eventEmailGlobal.subscribe(
      event => this.setEmailGlobal(event)
    );
    this.pegaVariavel.userNivelGlobal.subscribe(
      event => this.setUserNivel(event)
    );

    var email = this.pegaVariavel['emailGlobal'];
    var nivel = this.pegaVariavel['userNivel'];

      if(nivel=='admin'){
    this.http.get('events').subscribe(res => this.events = res);
      }else{
    this.http.post('pegaEmail', email).subscribe(res => this.events = res);
      }
    console.log(this.pegaVariavel['emailGlobal']);
    console.log(this.pegaVariavel['userNivel']);

    if(!this.pegaVariavel['emailGlobal']){
      swal({
        title: "Opa...",
        text: "Parece que você não está logado! Ir para a página de login?",
        icon: "error",
        buttons: ['Contate-nos', 'Ok']
      })
      .then((willDelete) => {
        if (willDelete) {
          this.router.navigate(['login/']);
        } else {
          this.router.navigate(['contato/']);
        }
      });
    } 
  }

  setEmailGlobal(visibilidade: string) {
    this.emailGlobal = visibilidade;
  }
  setUserNivel(lvl: string) {
    this.userNivel = lvl;
  }

}
