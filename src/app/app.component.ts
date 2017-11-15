import { Store } from '@ngrx/store';
import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { LOGOUT } from './user/shared/user.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isApplicationLoading: Observable<boolean>;
  isUserLogin: Observable<boolean>;

  constructor(
    private store: Store<any>,
  ) {
    this.isUserLogin = this.store
      .select('user')
      .map(state => state ? state.isLogin : false);

    this.isApplicationLoading = this.store
      .select('app')
      .map(state => state.isLoading);
  }

  logout() {
    this.store.select('app').dispatch({type: LOGOUT});
  }

}
