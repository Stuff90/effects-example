import { Action } from '@ngrx/store';

export const STOP_LOADING = '[App] loading stop';
export const START_LOADING = '[App] loading start';

export class StartLoadingAction implements Action {
  readonly type = START_LOADING;
}

export class StopLoadingAction implements Action {
  readonly type = STOP_LOADING;
}

export type AppActions = StartLoadingAction | StopLoadingAction;