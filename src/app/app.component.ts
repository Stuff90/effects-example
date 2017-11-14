import { Store } from '@ngrx/store';
import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isApplicationLoading: Observable<boolean>;

  constructor(
    private store: Store<any>,
  ) {
    this.isApplicationLoading = this.store.select('app').map(state => state.isLoading);
  }

}
