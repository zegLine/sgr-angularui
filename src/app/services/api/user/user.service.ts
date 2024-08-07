import { Injectable } from "@angular/core";
import { ApiService } from "../api.service";
import { Observable } from "rxjs";
import { HttpResponse } from "@angular/common/http";
import {StoreApiModel} from "../../../models/api/store/store-api-model";
import {StorePageApiModel} from "../../../models/api/store/store-page-api-model";
import {ItemApiModel} from "../../../models/api/item/item-api-model";
import {ItemPageApiModel} from "../../../models/api/item/item-page-api-model";
import {SGRFilterSelected} from "../../../models/filter/filter_selected";
import {UserApiModel} from "../../../models/api/user/user-api-model";
import {UserPageApiModel} from "../../../models/api/user/user-page-api-model";
import {SgrroleApiModel} from "../../../models/api/user/sgrrole-api-model";
import {SGRRoleSelection} from "../../../components/useredit/useredit.component";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = '/user';
  private baseUrlRoles = '/role';

  constructor(private apiService: ApiService) {}

  createUser(username: string, password: string): Observable<HttpResponse<UserApiModel>> {
    const body = {
      username: username,
      password: password
    }
    return this.apiService.callApi(`${this.baseUrl}/nou`, 'POST', body, null, null);
  }

  getAllUsers(pageSize: number, pageNumber: number, sortingColumn?: string, sortingDirection?: string): Observable<HttpResponse<UserPageApiModel>> {
    const params = {
      pageNumber: pageNumber,
      pageSize: pageSize,
      ...(sortingColumn && { sortingColumn }),
      ...(sortingDirection && { sortingDirection })
    }
    return this.apiService.callApi(`${this.baseUrl}/toate`, 'POST', null, {'Content-Type': 'application/JSON'}, params);
  }

  deleteUser(userId: string): Observable<HttpResponse<UserApiModel>> {
    return this.apiService.callApi(`${this.baseUrl}/${userId}/delete`, 'DELETE', null, null, null);
  }

  getUserDetails(userId: string): Observable<HttpResponse<UserApiModel>> {
    return this.apiService.callApi(`${this.baseUrl}/${userId}/details`, 'GET', null, null, null);
  }

  getAllRoles() : Observable<HttpResponse<SgrroleApiModel[]>> {
    return this.apiService.callApi(`${this.baseUrlRoles}/toate`, 'GET', null, null, null);
  }

  setRolesForUser(userId:string, roles: SgrroleApiModel[]): Observable<HttpResponse<UserApiModel>> {
    return this.apiService.callApi(`${this.baseUrl}/${userId}/roluri`, 'PUT', roles.map(role => role.id), null, null);
  }
}
