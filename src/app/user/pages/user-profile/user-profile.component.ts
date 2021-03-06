import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { User } from '../../../user/shared/interfaces/user';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UserProfileComponent implements OnInit {
  user: Observable<User[]>;

  constructor(
    private store: Store<any>
  ) { }

  ngOnInit() {
    this.user = this.store.select('user')
      .map(userState => [userState.current]);
  }

}
