import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { DishesComponent } from './dishes/dishes.component';
import { OrderComponent } from './order/order.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  {
    path:'checkout',component:OrderComponent
   },
   {
    path:'payment',component:PaymentComponent
   },
   {
   path:'confirm',component:ConfirmationComponent
   },
   {
    path:'',component:DishesComponent
   },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
