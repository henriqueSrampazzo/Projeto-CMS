import { Component, OnInit } from '@angular/core';

import { HttpService } from '../http.service';


@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {

  private noticia: Object = {
    title: '',
    description: '',
    photo1: '',
    photo2: '',
    photo3: '',
    photo4: '',
    photo5: ''
  };

  constructor(private http: HttpService) { }

  ngOnInit() {
  }

  cadastranoticia() {
    this.http.post('noticias', this.noticia)
             .subscribe(res => {
               //toastr.success(res.msg, 'Sucesso');
               alert('Cadastrado com sucesso');
             });
  }

}
