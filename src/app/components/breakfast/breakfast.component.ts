import { Component, OnInit } from '@angular/core';
import { FOOD } from '../../products/food'
import { Food } from '../../products/food-model'

@Component({
  selector: 'app-breakfast',
  templateUrl: './breakfast.component.html',
  styleUrls: ['./breakfast.component.css']
})
export class BreakfastComponent implements OnInit {
  FOOD: Food[] = FOOD;
  constructor() { }

  ngOnInit() {
  }

  // getMenu() {
  
  // }

}
