import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";
import { ApiAuthResponse } from "./api-auth-response";


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http:HttpClient) { }

  login(username: string, password: string) {
    return this.http.post<ApiAuthResponse>(environment.apiUrl + '/auth/login', {username, password})
      .subscribe(response => {
        if (response.responseType == "SGR_AUTH_SUCCESS") {
          this.setSession(response);
        }
      });

  }

  private setSession(authResult: ApiAuthResponse) {
    localStorage.setItem('session_token', authResult.tokenOptional);
  }
}
