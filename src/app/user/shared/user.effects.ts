import { Store } from "@ngrx/store";
import { Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Effect, Actions } from "@ngrx/effects";

import { SUBMIT_LOGIN, USER_SIGNED_IN } from "./user.actions";

import { UserCrendentials } from './interfaces/user-crendentials';
import { START_LOADING, STOP_LOADING } from "./../../shared/app.actions";
import { UserAuthenticationService } from "./services/user-authentication.service";
import { User } from "./interfaces/user";

@Injectable()
export class UserEffects {

  @Effect({ dispatch: false }) onUserSubmitLoginForm: Observable<any> = this.actions
    .ofType(SUBMIT_LOGIN)
    .do(() => this.store.select('app').dispatch({
      type: START_LOADING,
    }))
    .switchMap((creds: any) =>
      this.userAuthenticationService.authenticateUser(creds)
    )
    .do((user: User) => {
      this.store.select('user').dispatch({
        type: USER_SIGNED_IN,
        payload: user,
      });
      this.store.select('app').dispatch({
        type: STOP_LOADING,
      });

      this.router.navigate(['/user', user.username]);
    });

  constructor(
    private router: Router,
    private actions: Actions,
    private store: Store<any>,
    private userAuthenticationService: UserAuthenticationService,
  ) { }

}