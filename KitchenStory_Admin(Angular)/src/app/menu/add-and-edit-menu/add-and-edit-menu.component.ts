import { Component, Input } from '@angular/core';
import { MenuServiceService } from 'src/app/menu-service.service';

@Component({
  selector: 'app-add-and-edit-menu',
  templateUrl: './add-and-edit-menu.component.html',
  styleUrls: ['./add-and-edit-menu.component.css']
})
export class AddAndEditMenuComponent {
 
  @Input() getMenu:any;
  constructor(private menuservice: MenuServiceService){} 
 
  add(mytext:any){
    if(mytext ){
    this.menuservice.addMenu({menuName:mytext}).subscribe(data=>{
      console.log(data)
     },error=>{})
  }
}
}
