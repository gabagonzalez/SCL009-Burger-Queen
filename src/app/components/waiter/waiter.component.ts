import { Component, OnInit } from '@angular/core';
// Service
import { FoodService } from '../../services/food.service';
//Class
import { Food } from '../../products/food-model';
// Json-Data
import { FOOD } from '../../products/food';

@Component({
  selector: 'app-waiter',
  templateUrl: './waiter.component.html',
  styleUrls: ['./waiter.component.css']
})
export class WaiterComponent implements OnInit {
  FOOD: Food[] = FOOD;
  list: Food[];

  filterMenu(menuType: string) {
    this.getFood();
    this.list = this.list.filter(e=> {
      // console.log(e);
      return e.type === menuType;
    })
  }

  filterBreakfast(menuType: string) {
    this.filterMenu(menuType);
    // console.log(menuType);
  }

  filterDailyMenu(menuType: string) {
    this.filterMenu(menuType);
    // console.log(menuType);
  }

  selectedList: Food;
  
  onSelect(menu: Food): void {
  this.selectedList = menu;
  console.log(menu)
  }

  constructor( private foodService: FoodService ) { }

  ngOnInit() {
    this.foodService.getFood();

  }

  // Call Observable with Subscribe
  getFood(): void {
    this.foodService.getFood()
        .subscribe(foods => this.list = foods);
  }

}
