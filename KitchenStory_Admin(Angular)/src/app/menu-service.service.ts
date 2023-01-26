import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuServiceService {

  constructor(public http: HttpClient){} 

  getMenu():Observable<any>{

    return this.http.get("http://localhost:8090/menu");
    }

  addMenu(data:any):Observable<any>{

    return this.http.post("http://localhost:8090/menu",data);
  }  
 
  updateMenu(data:any):Observable<any>{

    return this.http.put("http://localhost:8090/menu",data);

  }
  
  deleteMenu(menuId:number):Observable<any>{

    return this.http.delete(`http://localhost:8090/menu/${menuId}`);
    }
}
