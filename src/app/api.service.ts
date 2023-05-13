import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private API_URL = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}

  signUp(userData: any): Observable<any> {
    // return this.http.post<any>(`${this.API_URL}/signup`, userData);
    return this.http.post<any>(`${this.API_URL}`, userData);
  }
}
