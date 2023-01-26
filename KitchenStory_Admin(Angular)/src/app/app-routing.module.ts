import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAndEditDishesComponent } from './dishes/add-and-edit-dishes/add-and-edit-dishes.component';
import { DishesListComponent } from './dishes/dishes-list/dishes-list.component';
import { DishesComponent } from './dishes/dishes.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  {
    path:'',component:HomeComponent
   },
   {
    path:'signin',component:LoginComponent
  },
  {
    path:'menu',component:MenuComponent
  },
  {
    path:'dishes',component:DishesComponent,
    children:[
     {
       path :"",component:DishesListComponent
     },
     {
       path :"disheslist",component:DishesListComponent
     },
     {
       path:"addandedit",component:AddAndEditDishesComponent
     }
    ]
   },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
