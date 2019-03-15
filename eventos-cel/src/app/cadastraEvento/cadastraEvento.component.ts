import { Component, OnInit } from '@angular/core';

import { HttpService } from '../http.service';

import swal from 'sweetalert';
import { StorageService } from '../storage.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cadastraEvento',
  templateUrl: './cadastraEvento.component.html',
  styleUrls: ['./cadastraEvento.component.css']
})
export class CadastraEventoComponent implements OnInit {

  image;
  image2;
  image3;
  image4;
  image5;

  private id_usuario: {};

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

  private evento: Object = {
    title: '',
    dataevent: '',
    photo1: '',
    photo2: '',
    photo3: '',
    photo4: '',
    photo5: '',
    id_user: this.storage.get('token'),
    nome_user: JSON.parse(sessionStorage.getItem('nomeCompleto')),
    eventpassword: ''
  };

  constructor(
    public http: HttpService,
    private httpService: HttpService,
    private storage: StorageService,
    private router: Router,
    private route: ActivatedRoute
    ) {}

  ngOnInit() { 
    console.log('email: '+this.evento['id_user']);
  }

  cadastraevento() {
    
    this.evento['photo1'] = this.image;
    this.evento['photo2'] = this.image2;
    this.evento['photo3'] = this.image3;
    this.evento['photo4'] = this.image4;
    this.evento['photo5'] = this.image5;

    this.http.post('events', this.evento)
             .subscribe(res => {
              swal({title:"Evento cadastrado com sucesso!",
                     icon:"success", 
              });    
             });
  }

    subscribe(noticia_id) {
    this.storage.set('noticia', noticia_id);

    if (this.storage.get('token') != undefined) {
      this.router.navigate(['/make-subscription']);
    } else {
      this.router.navigate(['/login'], { 'queryParams': { 'to': 'subscription_confirm' } });
    }
  }
}