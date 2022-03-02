import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.scss']
})
export class PaymentFormComponent implements OnInit {
 
  currentOperator: string | undefined;
  payTel: any | null;

  constructor(
    private route: ActivatedRoute, 
    private location: Location,
  ) { }

  ngOnInit(): void {
    this.getOperator();

  }

  getOperator() {
    this.currentOperator = this.route.snapshot.paramMap.get('name')?.toUpperCase();
    return this.currentOperator;
  }

  checkInput(event: any) {
    if (event.target.value !== null && isNaN(event.target.value) && event.target.value.length == 11) {
      return this.payTel = true
    }
    return this.payTel = false 
  }

  onSubmit() {
    const doRandom = Boolean(Math.round(Math.random()));
    
    if (doRandom && this.payTel) {
      alert( 'Your payment was successful!' );
    } else {
      alert( 'Something went wrong. Try again later' );
    }
  
  }

  goBack() {
    this.location.back();
  }

}
