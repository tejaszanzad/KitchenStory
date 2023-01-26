import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { AddAndEditMenuComponent } from './menu/add-and-edit-menu/add-and-edit-menu.component';
import { AddAndEditDishesComponent } from './dishes/add-and-edit-dishes/add-and-edit-dishes.component';
import { DishesListComponent } from './dishes/dishes-list/dishes-list.component';
import { DishesComponent } from './dishes/dishes.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    MenuComponent,
    DishesComponent,
    AddAndEditMenuComponent,
    AddAndEditDishesComponent,
    DishesListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
