import { Component, OnInit } from '@angular/core';
import { MenuServiceService } from '../menu-service.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{
  menus:any=[];
  selectedMenuId:number =0;
  constructor(private menu:MenuServiceService){}
  
  getMenu(){
    this.menu.getMenu().subscribe(data=>{
    this.menus=[...data];
      console.log(data)
     },error=>{}) 
  }

  edit(x:number){
    console.log(x)
    this.selectedMenuId =x;
  }

  update(menuId:number,menuName:string){
    this.menu.updateMenu({menuName:menuName,menuId:menuId}).subscribe(data=>{
      this.getMenu();
      console.log(data)
      this.selectedMenuId = 0;
     },error=>{})
  }
  
  deleteMenu(menuId:number){
    console.log(menuId)
    var retVal = confirm("Are you sure you want to delete?");
    if(retVal){
    this.menu.deleteMenu(menuId).subscribe(data=>{
      this.getMenu();
     },error=>{}) 
    }
  }

  ngOnInit(): void {
    this.getMenu();
   }
}
