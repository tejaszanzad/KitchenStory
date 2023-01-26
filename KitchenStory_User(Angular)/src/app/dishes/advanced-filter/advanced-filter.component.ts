import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MenuServiceService } from 'src/app/menu-service.service';

@Component({
  selector: 'app-advanced-filter',
  templateUrl: './advanced-filter.component.html',
  styleUrls: ['./advanced-filter.component.css']
})
export class AdvancedFilterComponent implements OnInit{
  @Output() doFilterEvent = new EventEmitter<number[]>();
  constructor(private menuservice:MenuServiceService){}
  
  menus: any =[];
 
  ngOnInit(): void {
    this.menuservice.getMenu().subscribe(data=>{

      this.menus= data;
      console.log(data)
     },error=>{}) 
  }

  filterDishes(menuId:number){
    const filterMenuIds:number[] = [];
    this.menus.forEach((m:any )=> {
      if(m.menuId === menuId) m.checked = !m.checked;
      if(m.checked){
        filterMenuIds.push(m.menuId)
      }
    });
    console.log("***",this.menus)
    this.doFilterEvent.emit(filterMenuIds)
  }
}
