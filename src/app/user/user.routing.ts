import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent, UserProfileComponent } from './pages';
import { UserProfileGuard } from './user-profile.guard';

export const userRoutes: Routes = [
  {
    path: 'login',
    component: UserLoginComponent
  }, {
    path: 'user/:id',
    component: UserProfileComponent,
    canActivate: [
      UserProfileGuard
    ]
  },
];