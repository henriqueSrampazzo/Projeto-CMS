import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from './../../http.service';
import { StorageService } from './../../storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-single',
  templateUrl: './event-single.component.html',
  styleUrls: ['./event-single.component.css']
})
export class EventSingleComponent implements OnInit {
  private event: {};

  constructor(
    private route: ActivatedRoute,
    private httpService: HttpService,
    private storage: StorageService,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
        this.httpService.getBy('events', params['slug'])
            .subscribe(data => this.event = data);
    });
  }

  subscribe(event_id) {
    this.storage.set('event', event_id);

    if(this.storage.get('token') != undefined) {
      this.router.navigate(['/make-subscription']);
    } else {
      this.router.navigate(['/login'], {'queryParams': {'to': 'subscription_confirm'}});
    }
  }

}
