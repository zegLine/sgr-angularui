import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = environment.apiUrl;

  constructor (private httpClient: HttpClient) {
  }

  public callApi(endpoint: string, method: string, body: any, headers: any, params: any): Observable<HttpResponse<any>> {
    let options = {
      body: body,
      params: params,
      headers: new HttpHeaders(headers),
      observe: 'response' as const // This will return the full HttpResponse
    };

    return this.httpClient.request(method, this.apiUrl + endpoint, options);
  }

}
