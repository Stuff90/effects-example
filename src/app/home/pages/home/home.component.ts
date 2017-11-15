import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';

import { User } from '../../../user/shared/interfaces/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: Observable<User[]>;

  constructor(
    private store: Store<any>
  ) { }

  ngOnInit() {
    this.user = this.store.select('user')
      .map(userState => [userState.current]);
  }

}
