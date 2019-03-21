import { Component, OnInit, Input } from '@angular/core';
import { Pipe } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({name: 'safeHtml'})
export class SafeHtml {
  constructor(private sanitizer:DomSanitizer){}

  transform(html) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(html);
  }
}

@Component({
  selector: 'app-vernoticia',
  templateUrl: './vernoticia.component.html',
  styleUrls: ['./vernoticia.component.css']
})
export class VerNoticiaComponent implements OnInit {

  @Input() noticia: {};
  dados: Array<any>;

  constructor(private domSanitizer: DomSanitizer) { }

  ngOnInit() {
  // this.dados =[    
  //  {id: this.noticia['id']},
  //  {photo1: this.noticia['photo1']},
  //  {photo2: this.noticia['photo2']},
  //  {photo3: this.noticia['photo3']},
  //  {photo4: this.noticia['photo4']},
  //  {photo5: this.noticia['photo5']},
  // ];
  //   var tamanho = (this.dados.length);
  // console.log('tamanho: '+tamanho);
  }


}
