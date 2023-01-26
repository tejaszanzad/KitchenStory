import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuServiceService {

  constructor(public http: HttpClient) { }

  getMenu():Observable<any>{

    return this.http.get("http://localhost:8090/menu");

  }
}
