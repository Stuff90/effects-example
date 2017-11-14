import { Action } from '@ngrx/store';
import { AppActions, START_LOADING, STOP_LOADING } from './app.actions';

const defaultAppState: any = {
  isLoading: false
}

export function appReducer(state: any = defaultAppState, action: AppActions) {
  switch (action.type) {
    case START_LOADING:
      return { ...state, isLoading: true};

    case STOP_LOADING:
      return { ...state, isLoading: false};

    default:
      return state;
  }
}