import { StorageService } from './storage.service';
import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'eventos';
  private pokemon: {} = {};
  private changeMenu = false;
  private muda = false;

  constructor(
    public http: HttpService,
    public storage: StorageService
  ) { }

  ngOnInit() {
    this.storage.emmitLogin.subscribe(
      change => this.changeMenu = change
    );

    // if(this.storage.get('token')){
    //   this.changeMenu = true;
    // }
  }

}
