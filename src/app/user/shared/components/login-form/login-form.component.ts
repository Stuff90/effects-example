import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { SUBMIT_LOGIN } from '../../user.actions';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginFormComponent implements OnInit, OnDestroy {
  isPageLoading: Observable<boolean>;
  emptyForm: Subscription;
  isFormDisable: Subscription;
  loginForm: FormGroup = new FormGroup({
    login: new FormControl('', [<any>Validators.required, <any>Validators.min(4)]),
    password: new FormControl('', [<any>Validators.required, <any>Validators.min(6)]),
  });

  constructor(
    private store: Store<any>,
  ) {
    this.emptyForm = this.store.select('user')
      .filter(Boolean)
      .map(userState => userState.hasLoginFailed)
      .distinctUntilChanged()
      .filter(hasLoginFailed => hasLoginFailed === true)
      .subscribe(() => this.loginForm.reset());

    this.isFormDisable = this.store.select('app')
      .subscribe((state) => state.isLoading
        ? this.loginForm.disable()
        : this.loginForm.enable()
      );
  }

  ngOnInit() { }

  ngOnDestroy() {
    this.emptyForm.unsubscribe();
    this.isFormDisable.unsubscribe();
  }

  submitLoginForm(): void {
    if (this.loginForm.valid) {
      this.store.dispatch({
        type: SUBMIT_LOGIN,
        payload: this.loginForm.value
      });
    }
  }

}
