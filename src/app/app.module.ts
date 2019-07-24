import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
// Components
import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { WaiterComponent } from './components/waiter/waiter.component';
import { KitchenComponent } from './components/kitchen/kitchen.component';
import { appRoutes } from './app.routes';
// Services
import { FoodService } from './services/food.service';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
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
    FoodService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
