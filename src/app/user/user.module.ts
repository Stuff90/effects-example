import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { UserLoginComponent, UserProfileComponent } from './pages';
import { LoginFormComponent } from './shared/components/login-form/login-form.component';
import { UserAuthenticationService } from './shared/services/user-authentication.service';

import { userRoutes } from './user.routing';
import { userReducer, UserEffects } from './shared';
import { UserProfileGuard } from './user-profile.guard';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    RouterModule.forChild(userRoutes),
    EffectsModule.forFeature([UserEffects]),
    StoreModule.forFeature('user', userReducer),
  ],
  providers: [
    UserProfileGuard,
    UserAuthenticationService
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
