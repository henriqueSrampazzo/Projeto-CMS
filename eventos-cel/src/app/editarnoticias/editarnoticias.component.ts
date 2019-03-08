import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { NoticiasComponent } from '../noticias/noticias.component';

@Component({
  selector: 'app-editarnoticias',
  templateUrl: './editarnoticias.component.html',
  styleUrls: ['./editarnoticias.component.css']
})
export class EditarNoticiasComponent implements OnInit {
    private noticias: Array<{}>;
    p:number = 100;

    constructor(public http: HttpService) {}

    ngOnInit() {
      this.http.get('noticias')
               .subscribe(res => this.noticias = res);
    }
}
