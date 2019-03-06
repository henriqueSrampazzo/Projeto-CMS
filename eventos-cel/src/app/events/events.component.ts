import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
    private events: Array<{}>;
    p:number = 1;

    constructor(public http: HttpService) {}

    ngOnInit() {
      this.http.get('events')
               .subscribe(res => this.events = res);
    }
}
