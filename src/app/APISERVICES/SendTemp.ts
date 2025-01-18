import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SendTemp{
    private apiUrl = "http://greetify.somee.com/api/Transactions";

    constructor(private http: HttpClient) {}

    addEmail(data:any): Observable<any> {
        return this.http.post(this.apiUrl, data);
    }

}
