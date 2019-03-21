import {  EventEmitter, Injectable } from "@angular/core";
@Injectable()
export class PegaVariavelService {

  eventEmailGlobal = new EventEmitter<any>();
  private emailGlobal: string = '';

  userNivelGlobal = new EventEmitter<any>();
  private userNivel: string = '';

  constructor() {
  }
  getEmailGlobal() {
    return this.emailGlobal;
  }
  setEmailGlobal(val: string) {
    this.emailGlobal = val;
    this.eventEmailGlobal.emit(val);
  }

  getUserNivel() {
    return this.userNivel;
  }
  setUserNivel(val: string) {
    this.userNivel = val;
    this.userNivelGlobal.emit(val);
  }
}