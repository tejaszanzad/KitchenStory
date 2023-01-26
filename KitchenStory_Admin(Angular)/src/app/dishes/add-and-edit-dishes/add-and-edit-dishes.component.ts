import { Component, OnInit } from '@angular/core';
import { DishesServiceService } from 'src/app/dishes-service.service';
import { MenuServiceService } from 'src/app/menu-service.service';

@Component({
  selector: 'app-add-and-edit-dishes',
  templateUrl: './add-and-edit-dishes.component.html',
  styleUrls: ['./add-and-edit-dishes.component.css']
})
export class AddAndEditDishesComponent implements OnInit{

  menus:any=[];
  
  constructor(private menuService:MenuServiceService, private dishService: DishesServiceService){}
  ngOnInit(): void {
    this.menuService.getMenu().subscribe(data=>{

      this.menus= data;
      console.log(data)
     },error=>{}) 
  }
  
  dish = {
    dishName: '',
    price: '',
    menuId: ''
  };

  addDish() {
    console.log(this.dish);
    this.dishService.addDishes(this.dish).subscribe(data=>{
     },error=>{})
  }
}
