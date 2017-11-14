import { Action } from '@ngrx/store';
import { UserActions, SUBMIT_LOGIN, RESET_CURRENT_USER, USER_SIGNED_IN } from './user.actions';

export function userReducer(state: {
  current: {},
  isLogin: false,
}, action: UserActions) {
  switch (action.type) {
    case SUBMIT_LOGIN:
      let current: any = {
        usernamne: action.payload.login
      };

      return {...state, current};

    case USER_SIGNED_IN:
      return { ...state, current: action.payload, isLogin: true};

    case RESET_CURRENT_USER:
      return { ...state, current: {}, isLogin: false};

    default:
      return state;
  }
}