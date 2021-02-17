import { Routes } from '@angular/router';

import { LandingComponent } from './components/landing/landing.component';
import { KitchenComponent } from './components/kitchen/kitchen.component';
import { WaiterComponent } from './components/waiter/waiter.component';


export const appRoutes: Routes = [
    { path: 'landing', component: LandingComponent },
    { path: 'kitchen', component: KitchenComponent },
    { path: 'waiter', component: WaiterComponent },
    { path: '**', component: LandingComponent },
    { path: '', redirectTo: '/landing', pathMatch:'full' } 
  ];
