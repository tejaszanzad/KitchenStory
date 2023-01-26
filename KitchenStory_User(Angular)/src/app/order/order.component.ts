import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit{
  
  dishes: any= [];
  totalAmount :number = 0;
  ngOnInit(): void {
    const cartDishJson = localStorage.getItem('cartDishes');
    var cartDishes = cartDishJson &&  JSON.parse(cartDishJson);
    this.dishes = cartDishes;
    this.totalAmount = this.dishes.reduce((oldVal:number, dish:any)=>{
      return dish.price + oldVal;
    }, 0)
    console.log("*****",this.totalAmount)
  }
}
