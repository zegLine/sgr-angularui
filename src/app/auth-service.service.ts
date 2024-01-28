import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http:HttpClient) { }

  login(username: string, password: string) {
    return this.http.post('http://localhost:8080/auth/login', {username, password});
  }
}
