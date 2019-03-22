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
  selector: 'app-editarevent',
  templateUrl: './editarevent.component.html',
  styleUrls: ['./editarevent.component.css']
})

export class EditarEventComponent implements OnInit {

  @Input() event: {};

  constructor(private domSanitizer: DomSanitizer) { }

  ngOnInit() { }

}