import { Injectable } from '@angular/core';
import { FOOD } from '../products/food';
import { Food } from '../products/food-model';


@Injectable({
  providedIn: 'root'
})
 
export class FoodService {
  FOOD: Food[] = FOOD;
  //Food:FOOD: Food[]
  constructor() {}

   getFood(type:string): Food {

    let getBreakfast = this.FOOD;
    let filtration = getBreakfast.filter( item => item.type == type)
    //return filtration;
    console.log(filtration);
    return {id: 0, type: "tipo", name: "hola", price: 3948}

   }
  
}
