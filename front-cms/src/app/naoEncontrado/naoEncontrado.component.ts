import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { HttpService } from '../http.service';

@Component({
  selector: 'app-naoEncontrado',
  templateUrl: './naoEncontrado.component.html',
  styleUrls: ['./naoEncontrado.component.css']
})
export class NaoEncontradoComponent implements OnInit {

  constructor(private http: HttpService, private router: Router,
  ) { }

  ngOnInit() { }

  voltar() {

    this.router.navigate(['/']);

  }

}
