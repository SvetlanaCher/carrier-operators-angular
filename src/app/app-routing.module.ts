import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PaymentFormComponent } from './payment-form/payment-form.component';
import { CardsComponent } from './cards/cards.component';

const routes: Routes = [
  {
    path: '',
    component: CardsComponent
  },
  {
    path: 'payment-form/:name',
    component: PaymentFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
