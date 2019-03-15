import { Component, OnInit } from '@angular/core';

import { HttpService } from '../http.service';
import swal from 'sweetalert';


@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {

  image;
  image2;
  image3;
  image4;
  image5;

  //foto1
  changeListener($event): void {
    this.readThis($event.target);
  }

  readThis(inputValue: any): void {
    var file: File = inputValue.files[0];
    var myReader: FileReader = new FileReader();

    myReader.onloadend = (e) => {
      this.image = myReader.result;
    }
    myReader.readAsDataURL(file);
  }

  //foto2
  changeListener2($event): void {
    this.readThis2($event.target);
  }

  readThis2(inputValue: any): void {
    var file: File = inputValue.files[0];
    var myReader: FileReader = new FileReader();

    myReader.onloadend = (e) => {
      this.image2 = myReader.result;
    }
    myReader.readAsDataURL(file);
  }

  //foto3
  changeListener3($event): void {
    this.readThis3($event.target);
  }

  readThis3(inputValue: any): void {
    var file: File = inputValue.files[0];
    var myReader: FileReader = new FileReader();

    myReader.onloadend = (e) => {
      this.image3 = myReader.result;
    }
    myReader.readAsDataURL(file);
  }

  //foto4
  changeListener4($event): void {
    this.readThis4($event.target);
  }

  readThis4(inputValue: any): void {
    var file: File = inputValue.files[0];
    var myReader: FileReader = new FileReader();

    myReader.onloadend = (e) => {
      this.image4 = myReader.result;
    }
    myReader.readAsDataURL(file);
  }

  //foto5
  changeListener5($event): void {
    this.readThis5($event.target);
  }

  readThis5(inputValue: any): void {
    var file: File = inputValue.files[0];
    var myReader: FileReader = new FileReader();

    myReader.onloadend = (e) => {
      this.image5 = myReader.result;
    }
    myReader.readAsDataURL(file);
  }

  private noticia: Object = {
    title: '',
    description: '',
    photo1: '',
    photo2: '',
    photo3: '',
    photo4: '',
    photo5: '',
    id_user: JSON.parse(sessionStorage.getItem('email')),
    nome_user: JSON.parse(sessionStorage.getItem('nomeCompleto'))
  };

  constructor(private http: HttpService) { }

  ngOnInit() {
    console.log('email: '+this.noticia['id_user']);
  }
  cadastranoticia() {
    
    this.noticia['photo1'] = this.image;
    this.noticia['photo2'] = this.image2;
    this.noticia['photo3'] = this.image3;
    this.noticia['photo4'] = this.image4;
    this.noticia['photo5'] = this.image5;

    this.http.post('noticias', this.noticia)
             .subscribe(res => {
              swal({title:"Notícia cadastrada com sucesso!",
                     icon:"success", 
              });
             });
  }

}
