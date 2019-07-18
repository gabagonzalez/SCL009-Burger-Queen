import { Injectable } from '@angular/core';
//import { Observable } from '';

@Injectable({
  providedIn: 'root'
})
export class FoodServiceService {

  constructor() {}

  getFood() {
    return "array de comida";
  }
  
}
