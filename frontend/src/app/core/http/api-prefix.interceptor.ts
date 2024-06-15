import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { jwtDecode } from "jwt-decode";
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl: any;

  constructor(private http: HttpClient) {
    this.apiUrl = 'http://localhost:8080'

  }

  get(page: any, limit: any = 6): Observable<any[]> {

    return this.http.get<any[]>(`${this.apiUrl}?offset=${page}&limit=${limit}`);
  }

  async login(username: string, password: string) {
    const fecher = async (url: string, token: string) => {
      return await fetch(url, {
        method: 'POST',
        headers: {
          'Authorization': token
        }
      })
    }
    const token = 'Basic ' + btoa(`${username}:${password}`);
    const response = await fecher(this.apiUrl + '/login', token);
    if (response.ok) {
      let bearerToken = response.headers.get("Authorization") || "";
      localStorage.setItem("token",bearerToken)
      const decoded = jwtDecode(bearerToken);
      console.log(decoded)
    }
  }
    


  patch(id: number, body: any) {
    return this.http.patch(`${this.apiUrl}/${id}`, body)
  }

  delete(id: any) {
    return this.http.delete(`${this.apiUrl}/${id}`)
  }

  post(body: any) {
    return this.http.post(this.apiUrl, body)
  }

  getOne(id: any) {
    return this.http.get(`${this.apiUrl}/${id}`)
  }
}
