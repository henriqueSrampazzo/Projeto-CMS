import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-editarevents',
  templateUrl: './editarevents.component.html',
  styleUrls: ['./editarevents.component.css']
})
export class EditarEventsComponent implements OnInit {
    private events: Array<{}>;
    p:number = 100;
    email = 'mateuspetry@indora.com.br';

    constructor(public http: HttpService) {}

    ngOnInit() {
      this.http.get('events')
               .subscribe(res => this.events = res);
              
    }
    
}
