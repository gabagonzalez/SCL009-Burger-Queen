import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
// Json-data
import { FOOD } from '../products/food';
// class
import { Food } from '../products/food-model';
import { WaiterComponent } from '../components/waiter/waiter.component';

@Injectable({
  providedIn: 'root'
})
 
export class FoodService {
  // FOOD: Food[] = FOOD;
  // Food:FOOD: Food[]
  constructor() {}

  // Function with Observable
  getFood(): Observable<Food[]> {
    return of(FOOD);
  }
  
}
