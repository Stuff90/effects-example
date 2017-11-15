import { Action } from '@ngrx/store';
import { User } from './interfaces/user';

export const LOGOUT = '[User] logout current user';
export const SUBMIT_LOGIN = '[User] login attempt';
export const LOGIN_FAILED = '[User] login attempt failed';
export const LOGIN_SUCCESSED = '[User] login attempt successed';
export const RESET_CURRENT_USER = '[User] reset current user data';
export const USER_SIGNED_IN = '[User] user successfully signed in';

export class SubmiLoginAction implements Action {
  readonly type = SUBMIT_LOGIN;
  constructor(public payload: {login: string, password: string}) { }
}

export class LogoutAction implements Action {
  readonly type = LOGOUT;
}

export class ResetUserAction implements Action {
  readonly type = RESET_CURRENT_USER;
}

export class LoginFailedAction implements Action {
  readonly type = LOGIN_FAILED;
}

export class LoginSuccessedAction implements Action {
  readonly type = LOGIN_SUCCESSED;
  constructor(public payload: User) { }
}

export class UserSignedInAction implements Action {
  readonly type = USER_SIGNED_IN;
  constructor(public payload: {login: string, password: string}) { }
}

export type UserActions =
  LogoutAction
  | ResetUserAction
  | SubmiLoginAction
  | LoginFailedAction
  | UserSignedInAction
  | LoginSuccessedAction;
