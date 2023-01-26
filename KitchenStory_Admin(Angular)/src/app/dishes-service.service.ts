import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DishesServiceService {

 constructor(public http: HttpClient){}

 getDishes():Observable<any>{

return this.http.get("http://localhost:8090/dishes");
}

 addDishes(data:any):Observable<any>{

  return this.http.post("http://localhost:8090/dishes",data); 
}

 updateDishes(data:any):Observable<any>{

  return this.http.put("http://localhost:8090/dishes",data);

}

 deleteDishes(dishId:number):Observable<any>{

 return this.http.delete(`http://localhost:8090/dishes/${dishId}`); 
}
}
