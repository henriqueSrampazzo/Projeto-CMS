import { StorageService } from './../storage.service';
import { HttpService } from './../http.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-make-subscription',
  templateUrl: './make-subscription.component.html',
  styleUrls: ['./make-subscription.component.css']
})
export class MakeSubscriptionComponent implements OnInit {

  constructor(
    private httpService: HttpService,
    private storage: StorageService,
    private router: Router
  ) { }

  ngOnInit() {

    let event_id = this.storage.get('event');
    let token: any = this.storage.get('token');

    this.httpService.post(`events/${event_id}/subscription`, {}, token).subscribe(data => {
      this.storage.remove('event');
      this.storage.remove('token');
      this.router.navigate(['/make-subscription/confirm']);
    });
  }
}
