import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MatSnackBar } from '@angular/material';
import { Effect, Actions } from '@ngrx/effects';

import {
  LOGIN_FAILED,
  LOGIN_SUCCESSED,
  LoginSuccessedAction,
  LOGOUT,
  RESET_CURRENT_USER,
  SUBMIT_LOGIN,
  USER_SIGNED_IN,
} from './user.actions';

import { UserCrendentials } from './interfaces/user-crendentials';
import { START_LOADING, STOP_LOADING } from './../../shared/app.actions';
import { UserAuthenticationService } from './services/user-authentication.service';
import { User } from './interfaces/user';

@Injectable()
export class UserEffects {

  @Effect({ dispatch: false }) onUserSubmitLoginForm: Observable<any> = this.actions
    .ofType(SUBMIT_LOGIN)
    .do(() => this.store.select('app').dispatch({
      type: START_LOADING,
    }))
    .switchMap((creds: any) =>
      this.userAuthenticationService.authenticateUser(creds.payload)
    )
    .do((result: any) => {
      const type = Object.keys(result).includes('error')
        ? LOGIN_FAILED
        : LOGIN_SUCCESSED;

      this.store.select('user').dispatch({
        type,
        payload: result
      });
      this.store.select('app').dispatch({
        type: STOP_LOADING,
      });
    });


  @Effect({ dispatch: false }) onUserLoginSuccessed: Observable<any> = this.actions
    .ofType(LOGIN_SUCCESSED)
    .map((action: LoginSuccessedAction) => action.payload)
    .do((user: User) => this.store.select('user').dispatch({
      type: USER_SIGNED_IN,
      payload: user,
    }))
    .do(() => this.useSnackbar('Successfully loggedin'))
    .switchMap((user: User) =>
      Observable.fromPromise(this.router.navigate(['/user/me']))
    );


  @Effect({ dispatch: false }) onUserLogout: Observable<any> = this.actions
    .ofType(LOGOUT)
    .do(() => this.store.select('user').dispatch({
      type: RESET_CURRENT_USER,
    }))
    .switchMap(() =>
      Observable.fromPromise(this.router.navigate(['/']))
    );


  @Effect({ dispatch: false }) onUserLoginFail: Observable<any> = this.actions
    .ofType(LOGIN_FAILED)
    .do(() => this.store.select('app').dispatch({
      type: RESET_CURRENT_USER,
    }))
    .do(() => this.useSnackbar('Bad login, try again'));

  constructor(
    private router: Router,
    private actions: Actions,
    private store: Store<any>,
    private userAuthenticationService: UserAuthenticationService,

    public snackBar: MatSnackBar
  ) { }

  private useSnackbar(message: string) {
    this.snackBar.open(message, 'Done', {
      duration: 3000,
    });
  }

}
