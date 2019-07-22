import { Routes } from '@angular/router';

import { LandingComponent } from './components/landing/landing.component';
import { KitchenComponent } from './components/kitchen/kitchen.component';
import { WaiterComponent } from './components/waiter/waiter.component';
import { BreakfastComponent } from './components/breakfast/breakfast.component';
import { MenuComponent } from './components/menu/menu.component';

export const appRoutes: Routes = [
    { path: 'landing', component: LandingComponent },
    { path: 'kitchen', component: KitchenComponent },
    { path: 'waiter', component: WaiterComponent },
    { path: 'breakfast', component: BreakfastComponent },
    { path: 'menu', component: MenuComponent },
    { path: '**', component: LandingComponent },
    { path: '', redirectTo: '/landing', pathMatch:'full' } 
  ];
