import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{

  dishes:any = [];
  isShowCart:boolean = false;
  ngOnInit(): void {
    const cartDishJson = localStorage.getItem('cartDishes');
    var cartDishes = cartDishJson &&  JSON.parse(cartDishJson);
    this.dishes = cartDishes;
  }

  showCart(){
    this.isShowCart = !this.isShowCart
  }

  clearCart(): void{
    localStorage.clear();
  }
}
