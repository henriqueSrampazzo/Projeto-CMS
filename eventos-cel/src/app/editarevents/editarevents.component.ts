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
  msgErro = false;

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

    var email = this.pegaVariavel['emailGlobal'];

    this.http.post('pegaEmail', email).subscribe(res => this.events = res);

    console.log(this.pegaVariavel['emailGlobal']);

    if(!this.pegaVariavel['emailGlobal']){
      swal({
        title: "Oops...",
        text: "Parece que você não está logado! Ir para a página de login?",
        icon: "error",
        dangerMode: true,
        buttons: ['Cancelar', 'Ok']
      })
      .then((willDelete) => {
        if (willDelete) {
          this.vaiparalogin();
        } else {
        }
      });
    } 
  }
  setEmailGlobal(visibilidade: string) {
    this.emailGlobal = visibilidade;
  }

  vaiparalogin(){
    this.router.navigate(['login/']);
  }

}
