import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {}

  login(email: string, password: string): Observable<any> {
    const isValidUser = email === 'laura@gmail.com' && password === '123';
    const response = isValidUser
      ? { api_auth_key: 'fake-api-auth-key' }
      : null;

    return of(response).pipe(
      delay(1000) // Simula um atraso de 1 segundo
    );
  }
}

