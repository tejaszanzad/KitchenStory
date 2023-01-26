import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DishesComponent } from './dishes/dishes.component';
import { DishesCartComponent } from './dishes/dishes-cart/dishes-cart.component';
import { AdvancedFilterComponent } from './dishes/advanced-filter/advanced-filter.component'
import { CartComponent } from './cart/cart.component';
import { OrderComponent } from './order/order.component';
import { PaymentComponent } from './payment/payment.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DishesComponent,
    DishesCartComponent,
    AdvancedFilterComponent,
    CartComponent,
    OrderComponent,
    PaymentComponent,
    ConfirmationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
