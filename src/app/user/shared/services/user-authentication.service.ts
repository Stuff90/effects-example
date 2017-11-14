import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { UserCrendentials } from '../interfaces/user-crendentials';

@Injectable()
export class UserAuthenticationService {

  constructor() { }

  authenticateUser(userCrendentials: UserCrendentials): Observable<any> {
    return Observable.of({
      username: 'example',
      firstname: 'first',
      lastname: 'last',
    }).delay(3000);
  }

}
