import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { LastGameComponent } from './pages/last-game/last-game.component';

export const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'lastgame', component: LastGameComponent
  }
];
