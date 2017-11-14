import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent, UserProfileComponent } from './pages';

export const userRoutes: Routes = [
  { path: 'login', component: UserLoginComponent },
  { path: 'user/:id', component: UserProfileComponent },
];