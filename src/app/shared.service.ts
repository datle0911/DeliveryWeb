import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly ApiUrl = "https://deliverywebapi.azurewebsites.net/api/";
  constructor(private http:HttpClient) { }

  getCustomersList():Observable<any[]>{
    return this.http.get<any>(this.ApiUrl + 'customers');
  }

  getOrdersList():Observable<any[]>{
    var queryRequest = true;
    return this.http.get<any>(this.ApiUrl + 'orders?minimal=' + queryRequest);
  }

  getProductsList():Observable<any[]>{
    var queryRequest = true;
    return this.http.get<any>(this.ApiUrl + 'products?minimal=' + queryRequest);
  }
}
