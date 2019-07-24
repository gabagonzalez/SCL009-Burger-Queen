import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
// Json-data
import { FOOD } from '../products/food';
// class
import { Food } from '../products/food-model';


@Injectable({
  providedIn: 'root'
})
 
export class FoodService {
  // FOOD: Food[] = FOOD;
  // Food:FOOD: Food[]
  constructor() {}

  //  getFood(type:string): Food {

  //   let getBreakfast = this.FOOD;
  //   let filtration = getBreakfast.filter( item => item.type == type)
  //   //return filtration;
  //   console.log(filtration);
  //   return {id: 0, type: "tipo", name: "hola", price: 3948}

  //  }
  
  // Function with Observable
  getFood(): Observable<Food[]> {
    return of(FOOD);
  }
  
}
