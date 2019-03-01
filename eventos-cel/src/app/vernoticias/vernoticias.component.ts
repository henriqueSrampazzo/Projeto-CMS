import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-vernoticias',
  templateUrl: './vernoticias.component.html',
  styleUrls: ['./vernoticias.component.css']
})
export class VerNoticiasComponent implements OnInit {
    private noticias: Array<{}>;
   

    constructor(public http: HttpService) {}

    ngOnInit() {
      this.http.get('noticias')
               .subscribe(res => this.noticias = res);
               
        
    }
}
