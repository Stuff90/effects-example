import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { User } from '../interfaces/user';
import { UserCrendentials } from '../interfaces/user-crendentials';

@Injectable()
export class UserAuthenticationService {

  constructor() { }

  authenticateUser(userCrendentials: UserCrendentials): Observable<User | {error: string}> {
    return Observable.of(
      userCrendentials.login === 'correct'
      ? {
        username: 'Jeanmi',
        firstname: 'Jean-Michel',
        lastname: 'Apeuprès',
      }
      : {
          error: 'Bad login !'
      }
    )
    .delay(3000);
  }

}
