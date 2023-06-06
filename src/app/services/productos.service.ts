import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getproducts() {
    return this.http.get(`${this.apiUrl}/productos`);
  }
}
