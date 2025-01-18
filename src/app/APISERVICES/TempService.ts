import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TempService{
    private apiUrl = "http://greetify.somee.com/api/Templates";

    constructor(private http: HttpClient) {}

    getService(): Observable<any> {
        return this.http.get(this.apiUrl);
    }
    getServiceById(id:string | null): Observable<any> {
        return this.http.get(`${this.apiUrl}/${id}`);
    }

    addTemp(data:any): Observable<any>{
        return this.http.post(this.apiUrl, data);
    }

    updateTemp(id:any,data:any): Observable<any>{
        return this.http.put(`${this.apiUrl}/${id}`, data);
    }

    deleteTemp(id:any): Observable<any>{
        return this.http.delete(`${this.apiUrl}/${id}`);
    }
}
