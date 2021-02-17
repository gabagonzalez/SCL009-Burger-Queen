import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LandingComponent } from './components/landing/landing.component';
import { WaiterComponent } from './components/waiter/waiter.component';
import { BreakfastComponent } from './components/breakfast/breakfast.component';
import { KitchenComponent } from './components/kitchen/kitchen.component';
import { appRoutes } from './app.routes';

import { FoodService } from './services/food.service';


@NgModule({
  declarations: [
    AppComponent,
    BreakfastComponent,
    WaiterComponent,
    KitchenComponent,
    LandingComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false, relativeLinkResolution: 'legacy' } //esto es para debugear
 //esto es para debugear
    )
  ],
  providers: [
    FoodService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
