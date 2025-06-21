import { Routes } from '@angular/router';
import { Login } from './auth/login/login';
import { AuthGuard } from './guards/auth-guard';
import { Home } from './home/home';
import { DisplayData } from './display-data/display-data';
import { InputData } from './input-data/input-data';

export const routes: Routes = [

  { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: Login },
        { path: 'home', component: Home, canActivate: [AuthGuard] },
          { path: 'display', component: DisplayData, canActivate: [AuthGuard] },
  { path: 'input', component: InputData, canActivate: [AuthGuard] },
  { path: '**', redirectTo: 'login' },

      

];
