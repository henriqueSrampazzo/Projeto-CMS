import { Component, OnInit } from '@angular/core';

import { HttpService } from '../http.service';


@Component({
  selector: 'app-cadastraEvento',
  templateUrl: './cadastraEvento.component.html',
  styleUrls: ['./cadastraEvento.component.css']
})
export class CadastraEventoComponent implements OnInit {

  private evento: Object = {
    title: '',
    dataevent: '',
    photo: ''
  };

  constructor(private http: HttpService) { 
  }

  ngOnInit() {
    
  }

  cadastraevento() {
    
    this.http.post('events', this.evento)
             .subscribe(res => {
               //toastr.success(res.msg, 'Sucesso');
               alert('Evento cadastrado com sucesso');
               
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
