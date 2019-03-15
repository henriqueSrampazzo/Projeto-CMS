import { Component, OnInit, Input} from '@angular/core';
import { HttpService } from '../http.service';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-editarevents',
  templateUrl: './editarevents.component.html',
  styleUrls: ['./editarevents.component.css']
})
export class EditarEventsComponent implements OnInit {
  
    //@Input() email: String;

    private events: Array<{}>;
    p:number = 100;

    constructor(public http: HttpService,private storage: StorageService) {}

    ngOnInit() {
      //var email =  JSON.parse(sessionStorage.getItem('email'));
      var email = this.storage.get('token');

      this.http.post('pegaEmail',email).subscribe(res => this.events = res);

      console.log('Email: '+email);          
    }
    
}
