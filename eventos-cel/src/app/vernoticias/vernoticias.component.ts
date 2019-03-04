import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { NoticiasComponent } from '../noticias/noticias.component';

@Component({
  selector: 'app-vernoticias',
  templateUrl: './vernoticias.component.html',
  styleUrls: ['./vernoticias.component.css']
})
export class VerNoticiasComponent implements OnInit {
    private noticias: Array<{}>;
    p:number = 1;

    constructor(public http: HttpService) {}

    ngOnInit() {
      this.http.get('noticias')
               .subscribe(res => this.noticias = res);
               
              // console.log(this.noticias.length);
    }
}
