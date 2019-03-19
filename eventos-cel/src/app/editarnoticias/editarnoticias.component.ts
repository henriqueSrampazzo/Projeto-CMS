import { Component, OnInit, Input, Output, EventEmitter, Injectable } from '@angular/core';
import { HttpService } from '../http.service';
import { NoticiasComponent } from '../noticias/noticias.component';
import { StorageService } from '../storage.service';
import { PegaVariavelService } from '../pegaVariavel.service';

@Component({
  selector: 'app-editarnoticias',
  templateUrl: './editarnoticias.component.html',
  styleUrls: ['./editarnoticias.component.css']
})
@Injectable() export class EditarNoticiasComponent implements OnInit {

  emailGlobal: string = '';

  private noticias: Array<{}>;
  p: number = 100;

  constructor(
    public http: HttpService,
    private storage: StorageService,
    private pegaVariavel: PegaVariavelService
  ) { }

  ngOnInit() {

    this.pegaVariavel.eventEmailGlobal.subscribe(
      event => this.setEmailGlobal(event)
    );

    var email = this.pegaVariavel['emailGlobal'];

    this.http.post('pegaEmailNoticia', email).subscribe(res => this.noticias = res);

    console.log(this.pegaVariavel['emailGlobal']);
  }

  setEmailGlobal(visibilidade: string) {
    this.emailGlobal = visibilidade;
  }
}
