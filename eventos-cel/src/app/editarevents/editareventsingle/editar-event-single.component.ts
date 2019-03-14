import { Component, OnInit, Input, Pipe } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HttpService } from '../../http.service';
import { StorageService } from '../../storage.service';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map'
import { HttpClient } from '@angular/common/http';
import { EventSingleComponent } from '../../events/event-single/event-single.component';

@Pipe({ name: 'safeHtml' })
export class SafeHtml {
  constructor(private sanitizer: DomSanitizer) { }

  transform(html) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(html);
  }
}

@Component({
  selector: 'app-editar-event-single',
  templateUrl: './editar-event-single.component.html',
  styleUrls: ['./editar-event-single.component.css']
})
export class EditarEventSingleComponent implements OnInit {
  private event: {};

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

  private eventeditado: Object = {
    id:null,
    title:null,
    dataevent:null,
    photo1:null,
    photo2:null,
    photo3:null,
    photo4:null,
    photo5:null
  };


  constructor(
    private route: ActivatedRoute,
    private httpService: HttpService,
    private storage: StorageService,
    private router: Router,
    private domSanitizer: DomSanitizer,
    private http: HttpService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.httpService.getBy('events', params['slug'])
        .subscribe(data => this.event = data);
    });
  }

  editaevent() {
    
    this.eventeditado['id'] = this.event['id'];
    
    this.eventeditado['photo1'] = this.image;
    this.eventeditado['photo2'] = this.image2;
    this.eventeditado['photo3'] = this.image3;
    this.eventeditado['photo4'] = this.image4;
    this.eventeditado['photo5'] = this.image5;

    this.http.post('eventosedit', this.eventeditado)
      .subscribe(res => {
        swal({
          title: "Evento editado com sucesso!",
          icon: "success",
        });
      });
  }

  confirmdelete(){
    swal({
      title: "Deseja mesmo deletar esse evento?",
      icon: "warning",
      dangerMode: true,
      buttons: ['Cancelar', 'Ok']
    })
    .then((willDelete) => {
      if (willDelete) {
        this.deletaevent();
        swal("Evento deletado com sucesso", {
          icon: "success",
        });
        this.router.navigate(['editareventos/']);
      } else {
        
      }
    });
  }

  deletaevent() {
    
    this.eventeditado['id'] = this.event['id'];
    
    var id_del = this.eventeditado['id'];

    this.http.post(`events/`+id_del, this.eventeditado)
      .subscribe(res => {
        swal({
          title: "Evento deletado com sucesso!",
          icon: "success",
        });
      });
  }

  cancelar(){
    this.router.navigate(['editareventos/']);
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
