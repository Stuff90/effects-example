import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { UserLoginComponent, UserProfileComponent } from './pages';
import { LoginFormComponent } from './shared/components/login-form/login-form.component';

import { userRoutes } from './user.routing';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(userRoutes),
  ],

  declarations: [
    UserLoginComponent,
    UserProfileComponent,
    LoginFormComponent
  ],
  exports: [
    UserLoginComponent,
  ]
})
export class UserModule { }
