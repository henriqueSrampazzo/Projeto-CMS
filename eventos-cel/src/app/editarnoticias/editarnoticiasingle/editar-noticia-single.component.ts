import { Component, OnInit, Input, Pipe } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


import { HttpService } from '../../http.service';
import { StorageService } from '../../storage.service';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({name: 'safeHtml'})
export class SafeHtml {
  constructor(private sanitizer:DomSanitizer){}

  transform(html) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(html);
  }
}

@Component({
  selector: 'app-editar-noticia-single',
  templateUrl: './editar-noticia-single.component.html',
  styleUrls: ['./editar-noticia-single.component.css']
})
export class EditarNoticiaSingleComponent implements OnInit {
  private noticia: {};

  id;
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
    this.id = (this.noticia['id']);
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

  private noticiaeditada: Object = {
    title: '',
    description: '',
    photo1: '',
    photo2: '',
    photo3: '',
    photo4: '',
    photo5: ''
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
        this.httpService.getBy('noticias', params['slug'])
            .subscribe(data => this.noticia = data);
            
    });
}

editanoticia() {
  this.http.post(`noticias`, this.noticiaeditada)
           .subscribe(res => {

            swal({title:"Notícia editada com sucesso!",
                   icon:"success", 
            });

           });
console.log(this.id);
           
}
  
  subscribe(noticia_id) {
    this.storage.set('noticia', noticia_id);

    if(this.storage.get('token') != undefined) {
      this.router.navigate(['/make-subscription']);
    } else {
      this.router.navigate(['/login'], {'queryParams': {'to': 'subscription_confirm'}});
    }
  }

}
