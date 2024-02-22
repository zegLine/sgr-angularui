import { Injectable } from "@angular/core";
import { ApiService } from "../api.service";
import { Observable } from "rxjs";
import { HttpResponse } from "@angular/common/http";
import {StoreApiModel} from "../../../models/api/store/store-api-model";
import {StorePageApiModel} from "../../../models/api/store/store-page-api-model";

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private baseUrl = '/store';

  constructor(private apiService: ApiService) {}

  createStore(name: string, desc: string): Observable<HttpResponse<StoreApiModel>> {
    const body = {
      store_name: name,
      store_desc: desc
    }
    return this.apiService.callApi(`${this.baseUrl}/nou`, 'POST', body, null, null);
  }

  getAllStoreItems(pageSize: number, pageNumber: number): Observable<HttpResponse<StorePageApiModel>> {
    const params = {
      pageNumber: pageNumber,
      pageSize: pageSize
    }
    return this.apiService.callApi(`${this.baseUrl}/toate`, 'GET', null, null, params);
  }

  deleteStore(storeId: string): Observable<HttpResponse<string>> {
    return this.apiService.callApi(`${this.baseUrl}/${storeId}/delete`, 'DELETE', null, null, null);
  }
}
