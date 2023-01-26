import { Component, OnInit } from '@angular/core';
import { DishServiceService } from '../dish-service.service';

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.css']
})
export class DishesComponent implements OnInit{
 
  dishDetails: any =[];
  dishes: any =[];
  tempDishes: any =[];
  
  constructor(private dishService:DishServiceService){}

  getDish() {
    this.dishService.getDish().subscribe(data=>{
     this.dishes=data;
     this.tempDishes = [...this.dishes];
      console.log(data)
     },error=>{})
 }

 filterDishes(menuIds:number[]){

  console.log("menuIds",menuIds)
  console.log("dishes",this.dishes)
  
  if(menuIds && menuIds.length > 0)
  this.tempDishes= this.dishes.filter((dish:any)=>menuIds.indexOf(dish.menu.menuId) !== -1)
  else
  this.tempDishes = this.dishes;
 }

 searchDishByName(e:any, dishName : string){
  console.log(dishName)
  if(e.keyCode === 13){
    if(dishName.length > 0)
    this.tempDishes = this.dishes.filter((dish:any)=>dish.dishName.toLowerCase().indexOf(dishName.toLocaleLowerCase()) !== -1)
    else
    this.tempDishes = this.dishes;
  }
 }
 
 ngOnInit(): void {
    this.getDish();
  }

}
