import { Component, OnInit, Input, Pipe } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HttpService } from '../../http.service';
import { StorageService } from '../../storage.service';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map'
import { HttpClient } from '@angular/common/http';
import { NoticiaSingleComponent } from '../../vernoticias/noticiasingle/noticia-single.component';

import { PegaVariavelService } from '../../pegaVariavel.service';

import * as md5 from 'js-md5';

@Pipe({ name: 'safeHtml' })
export class SafeHtml {
  constructor(private sanitizer: DomSanitizer) { }

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

  userNivel: string = '';

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

  private senha: Object = {
    eventpassword: null,
  };

  private noticiaeditada: Object = {
    id: null,
    title: null,
    description: null,
    photo1: null,
    photo2: null,
    photo3: null,
    photo4: null,
    photo5: null
  };

  constructor(
    private route: ActivatedRoute,
    private httpService: HttpService,
    private storage: StorageService,
    private router: Router,
    private domSanitizer: DomSanitizer,
    private http: HttpService,
    private pegaVariavel: PegaVariavelService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.httpService.getBy('noticias', params['slug'])
        .subscribe(data => this.noticia = data);
       // console.log(this.noticia['title']);
    });

    this.pegaVariavel.userNivelGlobal.subscribe(
      event => this.setUserNivel(event)
    );

    var nivel = this.pegaVariavel['userNivel'];

  }

  editanoticia() {

    if (md5(this.senha['noticiapassword']) == (this.noticia['noticiapassword']) || (this.pegaVariavel['userNivel']) == 'admin') {

      this.noticiaeditada['id'] = this.noticia['id'];

      this.noticiaeditada['photo1'] = this.image;
      this.noticiaeditada['photo2'] = this.image2;
      this.noticiaeditada['photo3'] = this.image3;
      this.noticiaeditada['photo4'] = this.image4;
      this.noticiaeditada['photo5'] = this.image5;

      this.noticiaeditada['title'] = this.noticia['title'];
      this.noticiaeditada['description'] = this.noticia['description'];

      this.http.post('noticiasedit', this.noticiaeditada)
        .subscribe(res => {
          swal({
            title: "Notícia editada com sucesso!",
            icon: "success",
          });
        });
    }

    swal({
      title: "Senha incorreta!",
      icon: "error",
    });

  }

  confirmdelete() {
    if (md5(this.senha['noticiapassword']) == (this.noticia['noticiapassword']) || (this.pegaVariavel['userNivel']) == 'admin') {
      swal({
        title: "Deseja mesmo deletar essa notícia?",
        icon: "warning",
        dangerMode: true,
        buttons: ['Cancelar', 'Ok']
      })
        .then((willDelete) => {
          if (willDelete) {
            this.deletanoticia();
            swal("Notícia deletada com sucesso", {
              icon: "success",
            });
            this.router.navigate(['editarnoticias/']);
          } else {
          }
        });
    }

    else {
      swal({
        title: "Senha incorreta!",
        icon: "error",
      });
    }
  }

  deletanoticia() {

    this.noticiaeditada['id'] = this.noticia['id'];

    var id_del = this.noticiaeditada['id'];

    this.http.post(`noticias/` + id_del, this.noticiaeditada)
      .subscribe(res => {
        swal({
          title: "Notícia deletada com sucesso!",
          icon: "success",
        });
      });
  }

  cancelar() {
    this.router.navigate(['editarnoticias/']);
  }

  setUserNivel(lvl: string) {
    this.userNivel = lvl;
  }

}