import { Injectable } from "@angular/core";
import { ApiService } from "../api.service";
import { Observable } from "rxjs";
import { HttpResponse } from "@angular/common/http";
import {StoreApiModel} from "../../../models/api/store/store-api-model";
import {StorePageApiModel} from "../../../models/api/store/store-page-api-model";
import {ItemApiModel} from "../../../models/api/item/item-api-model";
import {ItemPageApiModel} from "../../../models/api/item/item-page-api-model";

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private baseUrl = '/item';

  constructor(private apiService: ApiService) {}

  createItem(name: string, weight: number): Observable<HttpResponse<ItemApiModel>> {
    const body = {
      name: name,
      weight: weight
    }
    return this.apiService.callApi(`${this.baseUrl}/nou`, 'POST', body, null, null);
  }

  getAllItems(pageSize: number, pageNumber: number): Observable<HttpResponse<ItemPageApiModel>> {
    const params = {
      pageNumber: pageNumber,
      pageSize: pageSize
    }
    return this.apiService.callApi(`${this.baseUrl}/toate`, 'GET', null, null, params);
  }

  deleteItem(storeId: string): Observable<HttpResponse<string>> {
    return this.apiService.callApi(`${this.baseUrl}/${storeId}/delete`, 'DELETE', null, null, null);
  }
}
