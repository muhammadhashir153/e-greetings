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

    getCategoryById(id:number):Observable<any>{
      return this.http.get(this.apiUrl+"/"+id);
    }

    addCategory(data: any): Observable<any>{
      return this.http.post(this.apiUrl, data);
    }

    deleteCategory(id: any): Observable<any>{
      return this.http.delete(this.apiUrl + '/' + id);
    }

    updateCategory(id: number, data: any): Observable<any>{
      return this.http.put(this.apiUrl + '/' + id, data);
    }
}
