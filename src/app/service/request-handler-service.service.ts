import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RequestHandlerServiceService {

  private serverUrl = "http://" + environment.ip + ":" + environment.port + "/" + environment.baseUrl;

  constructor(private http: HttpClient) {
  }

  /* GET*/
  getRequest(endPoint: string): Observable<any> {
    console.log(this.getHeaders());
    return this.http.get(this.serverUrl + "/" + endPoint, {headers: this.getHeaders()});

  }

  /* POST*/
  postRequest(endPoint: string, body: any): Observable<any> {
    return this.http.post(this.serverUrl + "/" + endPoint, body, {headers: this.getHeaders()});
  }

  /*UPDATE*/
  patchRequest(endPoint: string, body: any): Observable<any> {
    return this.http.patch(this.serverUrl + "/" + endPoint, body, {headers: this.getHeaders()});
  }

  /*DELETE*/
  deleteRequest(endPoint: string): Observable<any> {
    return this.http.delete(this.serverUrl + "/" + endPoint, {headers: this.getHeaders()});
  }

  /* HTTP Headers */
  protected getHeaders(): HttpHeaders {
    let options: any = {
      'Content-type': 'application/json',
    };
    return new HttpHeaders(options);

  }


}
