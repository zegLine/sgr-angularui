import { Injectable } from "@angular/core";
import { ApiService } from "../api.service";
import { Observable } from "rxjs";
import { HttpResponse } from "@angular/common/http";
import {StoreApiModel} from "../../../models/api/store/store-api-model";
import {StorePageApiModel} from "../../../models/api/store/store-page-api-model";
import {ItemApiModel} from "../../../models/api/item/item-api-model";
import {ItemPageApiModel} from "../../../models/api/item/item-page-api-model";
import {SGRFilterSelected} from "../../../models/filter/filter_selected";

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

  getAllItems(pageSize: number, pageNumber: number, sortingColumn?: string, sortingDirection?: string, filtersSelected?: SGRFilterSelected[]): Observable<HttpResponse<ItemPageApiModel>> {
    const params = {
      pageNumber: pageNumber,
      pageSize: pageSize,
      ...(sortingColumn && { sortingColumn }),
      ...(sortingDirection && { sortingDirection })
    }
    const body = filtersSelected;
    return this.apiService.callApi(`${this.baseUrl}/toate`, 'POST', body, {'Content-Type': 'application/JSON'}, params);
  }

  deleteItem(storeId: string): Observable<HttpResponse<string>> {
    return this.apiService.callApi(`${this.baseUrl}/${storeId}/delete`, 'DELETE', null, null, null);
  }
}
