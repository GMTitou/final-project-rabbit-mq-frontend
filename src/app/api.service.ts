import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  register(user: { email: string, password: string }): Observable<any> {
    return this.http.post(`${this.baseUrl}/auth/register`, user);
  }

  login(user: { email: string, password: string }): Observable<any> {
    return this.http.post(`${this.baseUrl}/auth/login`, user);
  }

  sendMessage(message: { content: string }): Observable<any> {
    return this.http.post(`${this.baseUrl}/chat/send`, message);
  }

  getMessages(userId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/chat/messages/${userId}`);
  }
}
