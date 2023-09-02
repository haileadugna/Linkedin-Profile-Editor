import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditorService {

  private baseUrl = 'http://localhost:3000';
  constructor(private http:HttpClient) { }

  getProfileHeader(item:string):Observable<string>{
    return this.http.post<string>(`${this.baseUrl}/profileHeader`,{item});
  }

  getProfileAbout(item:string):Observable<string>{
    return this.http.post<string>(`${this.baseUrl}/profileAbout`,{item});
  }

  getProfileExpirence(item:string):Observable<string>{
    return this.http.post<string>(`${this.baseUrl}/profileExpirence`,{item});
  }
}
