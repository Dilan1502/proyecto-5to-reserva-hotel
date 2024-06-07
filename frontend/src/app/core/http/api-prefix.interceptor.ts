import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
 private apiUrl
 private globalUrl='http://localhost:3000'

 constructor(private http: HttpClient,  @Inject('url') url:any) {
    this.apiUrl= `${this.globalUrl}/${url}`
    
  }

 get(page:any,limit:any=6): Observable<any[]> {  
    return this.http.get<any[]>(`${this.apiUrl}?offset=${page}&limit=${limit}`);
 }

 /*login(data:LoginModel){
  return this.http.get(`${this.apiUrl}?password=${data.password}&user=${data.user}`)
 }*/

 recoveryPassword(body:any){
  return this.http.post(`${this.globalUrl}/recover-password/send-message-to-email`,body)
 }

 getSerch(email:string){
  return this.http.get(`${this.apiUrl}?search=${email}`)
 }

 patch(id:number,body:any){
  return this.http.patch(`${this.apiUrl}/${id}`,body)
 }

 delete(id:any){
  return this.http.delete(`${this.apiUrl}/${id}`)
 }

 post (body: any){
  return this.http.post(this.apiUrl, body)
 }

 getOne(id:any){
  return this.http.get(`${this.apiUrl}/${id}`)
 }
}
