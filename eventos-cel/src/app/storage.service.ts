import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class StorageService {
  emmitLogin = new EventEmitter<boolean>();

  constructor() { }

  get(index) {
     return localStorage.getItem(index);
  }

  set(index, value) {
    this.emmitLogin.emit(true);
    localStorage.setItem(index, value);
  }

  remove(index) {
    this.emmitLogin.emit(false);
    localStorage.removeItem(index);
  }
}
