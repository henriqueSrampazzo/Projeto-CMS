import { Component, OnInit } from '@angular/core';

import { HttpService } from '../http.service';


@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {

  image;
  changeListener($event) : void {
    this.readThis($event.target);
    var url1 = document.getElementById('url1').innerHTML;
    console.log('url: ' +url1);
  }
  
  readThis(inputValue: any): void {
    var file:File = inputValue.files[0];
    var myReader:FileReader = new FileReader();
  
    myReader.onloadend = (e) => {
      this.image = myReader.result;
      console.log('image:'+this.image);
    }
    myReader.readAsDataURL(file);
  }

  private noticia: Object = {
    title: 'jkhsadjhd',
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

  confirmaFoto1(){
    var url1 = document.getElementById('url1').innerHTML;
    console.log('url confirmada ->'+url1);  
    this.image = url1;
  }

  cadastranoticia() {
    this.http.post('noticias', this.noticia)
             .subscribe(res => {
               //toastr.success(res.msg, 'Sucesso');
               alert('Cadastrado com sucesso');
             });
  }

}
