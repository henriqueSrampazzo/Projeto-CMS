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

  // inputFileChange(event){
  //   console.log('entrou no evento');
  //   if(event.target.files && event.target.files[0]){
  //     const photo1 = event.target.files[0];

  //     const formData = new FormData();
  //     formData.append('photo1',photo1);

  //     this.http.post('cadastranoticia', formData)
  //     .subscribe(resposta1 => alert('photo1 enviada.'));
  //   }
  // }

}
