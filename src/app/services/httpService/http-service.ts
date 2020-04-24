import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  public get(endpoint: string) {
    return this.http.get(endpoint);
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
