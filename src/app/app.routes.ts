import { Routes } from '@angular/router';

import { BreakfastComponent } from './components/breakfast/breakfast.component';
import { WaiterComponent } from './components/waiter/waiter.component';
import { KitchenComponent } from './components/kitchen/kitchen.component';
import { LandingComponent } from './landing/landing.component';

export const appRoutes: Routes = [
    { path: 'landing', component: LandingComponent },
    { path: 'breakfast', component: BreakfastComponent },
    { path: 'kitchen', component: KitchenComponent },
    { path: 'waiter', component: WaiterComponent },
    { path: '**', component: LandingComponent },
    { path: '', redirectTo: '/landing', pathMatch:'full' } 
  ];
