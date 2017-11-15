import { Action } from '@ngrx/store';
import { LOGIN_FAILED, RESET_CURRENT_USER, SUBMIT_LOGIN, USER_SIGNED_IN,
  UserActions
} from './user.actions';

export function userReducer(state: {
  current: {},
  isLogin: false,
}, action: UserActions) {
  switch (action.type) {
    case SUBMIT_LOGIN:
      const current: any = {
        usernamne: action.payload.login
      };

      return { ...state, current, hasLoginFailed: false};

    case USER_SIGNED_IN:
      return { ...state, current: action.payload, isLogin: true};

    case LOGIN_FAILED:
      return { ...state, hasLoginFailed: true};

    case RESET_CURRENT_USER:
      return { ...state, current: {}, isLogin: false};

    default:
      return state;
  }
}
