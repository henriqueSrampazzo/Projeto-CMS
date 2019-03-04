import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../../http.service';
import { StorageService } from '../../storage.service';
import { Router } from '@angular/router';

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
    private router: Router

  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
        this.httpService.getBy('noticias', params['slug'])
            .subscribe(data => this.noticia = data);
    });
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
