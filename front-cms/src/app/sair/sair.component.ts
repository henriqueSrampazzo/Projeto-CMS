import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { HttpService } from '../http.service';

@Component({
  selector: 'app-sair',
  templateUrl: './sair.component.html',
  styleUrls: ['./sair.component.css']
})
export class SairComponent implements OnInit {

  constructor(private http: HttpService, private router: Router,
  ) { }

  ngOnInit() {
  }

  sair() {

    sessionStorage.clear();
    localStorage.clear();
  }

  ficar() {

    this.router.navigate(['/']);
  }

}
