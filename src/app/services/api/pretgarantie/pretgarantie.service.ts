import { Injectable } from "@angular/core";
import { ApiService } from "../api.service";
import { Observable } from "rxjs";
import { HttpResponse } from "@angular/common/http";
import {PretGarantie} from "../../../models/api/pretgarantie/pretgarantie-api-model";

@Injectable({
  providedIn: 'root'
})
export class PretgarantieService {
  private baseUrl = '/garantie/pret'; // Assuming your Angular app serves the backend on the same domain

  constructor(private apiService: ApiService) {}

  createPretGarantie(price: number): Observable<HttpResponse<PretGarantie>> {
    const params = {
      price: price
    }
    return this.apiService.callApi(`${this.baseUrl}/nou`, 'POST', null, null, params);
  }

  getAllPretGarantieItems(): Observable<HttpResponse<PretGarantie[]>> {
    return this.apiService.callApi(`${this.baseUrl}/toate`, 'GET', null, null, null);
  }

  deletePretGarantie(id: string): Observable<HttpResponse<number>> {
    return this.apiService.callApi(`${this.baseUrl}/${id}/delete`, 'DELETE', null, null, null);
  }

  getLatestPretGarantie(): Observable<HttpResponse<PretGarantie>> {
    return this.apiService.callApi(`${this.baseUrl}/curent`, 'GET', null, null, null);
  }
}
