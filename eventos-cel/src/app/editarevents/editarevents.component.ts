import { Component, OnInit, Input, Output, EventEmitter, Injectable} from '@angular/core';
import { HttpService } from '../http.service';
import { StorageService } from '../storage.service';
import { PegaVariavelService } from '../pegaVariavel.service';


@Component({
  selector: 'app-editarevents',
  templateUrl: './editarevents.component.html',
  styleUrls: ['./editarevents.component.css']
})
@Injectable() export class EditarEventsComponent implements OnInit {
  
    //@Input() email: String;
    emailGlobal: string = '';

    private events: Array<{}>;
    p:number = 100;

    constructor(
      public http: HttpService,
      private storage: StorageService,
      private pegaVariavel : PegaVariavelService
      ) {}

    ngOnInit() {

      this.pegaVariavel.eventEmailGlobal.subscribe(
        event => this.setEmailGlobal(event)
        );
        
      var email = this.pegaVariavel['emailGlobal'];

      this.http.post('pegaEmail',email).subscribe(res => this.events = res);

      console.log(this.pegaVariavel['emailGlobal']);        
    }
    setEmailGlobal(visibilidade: string) {
      this.emailGlobal = visibilidade;
    }
  
}
