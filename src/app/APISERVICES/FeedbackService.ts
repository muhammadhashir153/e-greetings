import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FeedbackService{
    private apiUrl = "/api/Feedbacks";

    constructor(private http: HttpClient) {}

    getFeedbacks(): Observable<any> {
        return this.http.get(this.apiUrl);
    }

    getFeedbackById(id:number):Observable<any>{
      return this.http.get(this.apiUrl+"/"+id);
    }

    addFeedback(data: any): Observable<any>{
      return this.http.post(this.apiUrl, data);
    }

    deleteFeedback(id: any): Observable<any>{
      return this.http.delete(this.apiUrl + '/' + id);
    }

    updateFeedback(id: number, data: any): Observable<any>{
      return this.http.put(this.apiUrl + '/' + id, data);
    }
}
