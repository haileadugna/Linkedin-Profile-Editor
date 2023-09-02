import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private baseUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  getChat(item: string): Observable<string> {
    return this.http.put<string>(`${this.baseUrl}/chat`, { item });
  }

  
}
