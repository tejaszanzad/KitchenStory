import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DishServiceService {

  constructor(public http: HttpClient) { }

  getDish():Observable<any>{

    return this.http.get("http://localhost:8090/dishes");
    }
    
}
