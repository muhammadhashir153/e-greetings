import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryService{
    private apiUrl = "/api/Categories";

    constructor(private http: HttpClient) {}

    getCategories(): Observable<any> {
        return this.http.get(this.apiUrl);
    }
}
