import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  public get(endpoint: string, data?: any) {
    if(!data) {
      data = {};
    }
    return this.http.get(endpoint, data);
  }

  public post(endpoint: string, data) {
    return this.http.post(endpoint, data);
  }

  public put(endpoint: string, data) {
    return this.http.put(endpoint, data);
  }

  public delete(endpoint: string) {
    return this.http.delete(endpoint);
  }
}
