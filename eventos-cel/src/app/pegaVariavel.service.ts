import {  EventEmitter, Injectable } from "@angular/core";
@Injectable()
export class PegaVariavelService {

  eventEmailGlobal = new EventEmitter<any>();
  private emailGlobal: string = '';

  constructor() {
  }
  getEmailGlobal() {
    return this.emailGlobal;
  }
  setEmailGlobal(val: string) {
    this.emailGlobal = val;
    this.eventEmailGlobal.emit(val);
  }
}