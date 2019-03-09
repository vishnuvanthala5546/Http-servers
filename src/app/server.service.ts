import {Injectable} from '@angular/core';
import * as Http from 'http';

@Injectable()
export class ServerService {
  constructor(private http: Http) {
  }

  storeservers(servers: any[]) {
    return this.http.post('https://udemy-ng-http.firebaseio.com/data.json', servers);
  }
}
