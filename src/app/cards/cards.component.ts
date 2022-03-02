import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Operators } from '../interfaces/operators.interface';
import { OperatorsService } from '../services/operators.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  operatorsList: Operators[] = [];

  constructor(public operatorsService: OperatorsService, private router: Router) { }

  ngOnInit(): void {
    this.operatorsService.getOperators().subscribe((op) => this.operatorsList = op);
  }

  payPage() {
    this.router.navigate(['payment-form']);
  }

}
