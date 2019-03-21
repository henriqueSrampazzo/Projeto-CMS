import {Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
declare let toastr;

export class ErrorHandler {
  static handleError(error: Response | any) {
    if (error instanceof Response) {
      let msg = error.json();
      toastr.error(msg.msg, 'Error');
    }

    return Observable.throw(error);
  }
}
