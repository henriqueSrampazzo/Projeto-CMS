import { Component, OnInit, Input, Pipe } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../../http.service';
import { StorageService } from '../../storage.service';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({ name: 'safeHtml' })
export class SafeHtml {
  constructor(private sanitizer: DomSanitizer) { }

  transform(html) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(html);
  }
}

@Component({
  selector: 'app-noticia-single',
  templateUrl: './noticia-single.component.html',
  styleUrls: ['./noticia-single.component.css']
})
export class NoticiaSingleComponent implements OnInit {
  private noticia: {};


  constructor(
    private route: ActivatedRoute,
    private httpService: HttpService,
    private storage: StorageService,
    private router: Router,
    private domSanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.httpService.getBy('noticias', params['slug'])
        .subscribe(data => this.noticia = data);
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
