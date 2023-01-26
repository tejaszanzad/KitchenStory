import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dishes-cart',
  templateUrl: './dishes-cart.component.html',
  styleUrls: ['./dishes-cart.component.css']
})
export class DishesCartComponent implements OnInit{

  @Input() dishDetails:any;
  dish: any =[];

ngOnInit(){
  console.log("dishDetails=", this.dishDetails)
}
   

addToCart(dishDetails:any, qnt:string){
  const cartDishJson = localStorage.getItem('cartDishes');
  var cartDishes = cartDishJson &&  JSON.parse(cartDishJson);
  const dish = {dishId:dishDetails.dishId, qnt: qnt, dishName: dishDetails.dishName, price : dishDetails.price};
  if(!cartDishes){
    cartDishes = []
  }
  cartDishes.push(dish)
  localStorage.setItem('cartDishes', JSON.stringify(cartDishes));
}
}
