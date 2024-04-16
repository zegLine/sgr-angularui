import {Injectable} from "@angular/core";
import {ApiService} from "../api.service";
import {Observable} from "rxjs";
import {HttpResponse} from "@angular/common/http";
import {SgrroleApiModel} from "../../../models/api/user/sgrrole-api-model";

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  private baseUrl = '/role';

  constructor(private apiService: ApiService) {}

  getAllRoles() : Observable<HttpResponse<SgrroleApiModel[]>> {
    return this.apiService.callApi(`${this.baseUrl}/toate`, 'GET', null, null, null);
  }

  deleteRole(id: number): Observable<HttpResponse<SgrroleApiModel>> {
    return this.apiService.callApi(`${this.baseUrl}/${id}/delete`, 'DELETE', null, null, null);
  }

  createRole(name: string): Observable<HttpResponse<SgrroleApiModel>> {
    return this.apiService.callApi(`${this.baseUrl}/nou`, 'POST', {name: name}, null, null);
  }

  getRoleDetails(roleId: string): Observable<HttpResponse<SgrroleApiModel>> {
    return this.apiService.callApi(`${this.baseUrl}/${roleId}/details`, 'GET', null, null, null);
  }

  setRolePrivileges(roleId: string, privileges: string[]): Observable<HttpResponse<SgrroleApiModel>> {
    return this.apiService.callApi(`${this.baseUrl}/${roleId}/privilegii`, 'PUT', {privileges: privileges}, null, null);
  }
}
