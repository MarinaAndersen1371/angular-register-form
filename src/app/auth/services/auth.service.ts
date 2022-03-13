import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { RegisterRequestInterface } from '../types/registerRequest.interface';
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface';
import { AuthResponseInterface } from 'src/app/auth/types/authResponse.interface';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  register(data: RegisterRequestInterface): Observable<CurrentUserInterface> {
    const url = environment.apiURL + '/users';

    return this.httpClient
      .post<AuthResponseInterface>(url, data)
      .pipe(map((response: AuthResponseInterface) => response.user));
  }
}
