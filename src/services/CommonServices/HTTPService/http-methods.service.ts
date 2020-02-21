import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable ,Inject } from "@angular/core";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class HttpMethodsService {
  constructor(
    private http: HttpClient,
  ) {}


  post(serviceName: string, data: any) {
    const headers = new HttpHeaders({
      "Content-Type": "application/x-www-form-urlencoded"
    });
    const options = { headers: headers, withCredintials: false };
    const url = environment.apiUrl + serviceName;
    return this.http.post(url, JSON.stringify(data), options);
  }



  get(serviceName: string, data: any) {
    const headers = new HttpHeaders({
      "Content-Type": "application/x-www-form-urlencoded"
    });
    let params = new HttpParams().set("token", environment.token);
    const options = {
      params: params,
      headers: headers,
      withCredintials: false
    };
    const url = environment.apiUrl + serviceName;
    return this.http.get(url, options);
  }

  post1(serviceName: string, data: any) {
    const headers1 = new HttpHeaders({ "Content-Type": "application/json" });
    const options = { headers: headers1, withCredintials: false };
    const url = environment.apiUrl + serviceName;
    return this.http.post(url, JSON.stringify(data), options);
  }


}
