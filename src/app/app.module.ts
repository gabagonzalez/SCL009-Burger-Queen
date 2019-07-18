import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BreakfastComponent } from './components/breakfast/breakfast.component';
import { WaiterComponent } from './components/waiter/waiter.component';
import { KitchenComponent } from './components/kitchen/kitchen.component';

import { FoodServiceService } from './services/food-service.service';

export const appRoutes: Routes = [

  { path: 'breakfast', component: BreakfastComponent },
  { path: 'kitchen', component: KitchenComponent },
  { path: 'waiter', component: WaiterComponent },
  { path: '**', component: WaiterComponent },
  { path: '', redirectTo: '/waiter', pathMatch:'full' } 
];

@NgModule({
  declarations: [
    AppComponent,
    BreakfastComponent,
    WaiterComponent,
    KitchenComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } //esto es para debugear
    )
  ],
  providers: [
    FoodServiceService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
