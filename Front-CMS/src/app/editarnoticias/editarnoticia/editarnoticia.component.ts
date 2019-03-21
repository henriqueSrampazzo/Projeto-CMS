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
  selector: 'app-editarnoticia',
  templateUrl: './editarnoticia.component.html',
  styleUrls: ['./editarnoticia.component.css']
})

export class EditarNoticiaComponent implements OnInit {

  @Input() noticia: {};

  constructor(private domSanitizer: DomSanitizer) { }

  ngOnInit() {}

}