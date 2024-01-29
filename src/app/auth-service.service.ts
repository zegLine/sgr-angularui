import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";
import { ApiAuthResponse } from "./api-auth-response";
import {log} from "@angular-devkit/build-angular/src/builders/ssr-dev-server";

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http:HttpClient) { }

  login(username: string, password: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.http.post<ApiAuthResponse>(environment.apiUrl + '/auth/login', { username, password })
        .subscribe({
          next: (response) => {
            if (response.responseType === "SGR_AUTH_SUCCESS") {
              this.setSession(response);
              resolve(true);
            } else {
              // If the responseType is not SGR_AUTH_SUCCESS, resolve with false
              resolve(false);
            }
          },
          error: (error) => {
            console.error('Login error:', error);
            resolve(false);
          }
        });
    });
  }

  private setSession(authResult: ApiAuthResponse) {
    localStorage.setItem('session_token', authResult.tokenOptional);
  }

  isLoggedIn(): boolean {
    let token: string|null = localStorage.getItem('session_token');
    if (token === null) return false;

    const notNullToken = token as string;

    return this.isTokenExpired(notNullToken);
  }

  private isTokenExpired(token: string) {
    const expiry = (JSON.parse(atob(token.split('.')[1]))).exp;
    return expiry * 1000 > Date.now();
  }

  logOut() {
    localStorage.removeItem('session_token');
  }
}
