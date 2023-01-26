import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DishesServiceService } from 'src/app/dishes-service.service';
import { MenuServiceService } from 'src/app/menu-service.service';

@Component({
  selector: 'app-dishes-list',
  templateUrl: './dishes-list.component.html',
  styleUrls: ['./dishes-list.component.css']
})
export class DishesListComponent implements OnInit{

  menus:any= [];
  dishes:any=[];
  selectedDishId: number=0;
 
  constructor(private dishService:DishesServiceService, private menuService:MenuServiceService, private route: ActivatedRoute,  private router:Router){}
  
  getDish() {
    this.dishService.getDishes().subscribe(data=>{
    this.dishes=data;
     console.log(data)
    },error=>{})
  }

  getMenu(){
    this.menuService.getMenu().subscribe(data=>{

      this.menus= data;
      console.log(data)
     },error=>{}) 
  }
  
  ngOnInit(): void {
    this.getDish();
    this.getMenu();
  }

  showAddAndEditForm(){
    this.router.navigate(['addandedit'], {relativeTo:this.route});
  }

  edit(x:number){
    console.log(x)
    this.selectedDishId =x;
  }

  update(dishData:any){
    this.dishService.updateDishes(dishData).subscribe(data=>{
      this.getDish();
      console.log(data)
      this.selectedDishId = 0; 
     },error=>{})
  }
  
  deleteDish(dishId:number){
    console.log(dishId)
    var retVal = confirm("Are you sure you want to delete?");
    if(retVal){
    this.dishService.deleteDishes(dishId).subscribe(data=>{
      this.getDish();
     },error=>{}) 
    }
  }
}
