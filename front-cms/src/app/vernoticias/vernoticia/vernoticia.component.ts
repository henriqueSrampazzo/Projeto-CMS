import { Component, OnInit, Input } from '@angular/core';
import { Pipe } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({ name: 'safeHtml' })
export class SafeHtml {
  constructor(private sanitizer: DomSanitizer) { }

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

  ngOnInit() {}

}
