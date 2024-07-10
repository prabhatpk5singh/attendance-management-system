import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RosterService {
  private apiUrl = 'http://your-backend-api-url/roster';

  constructor(private http: HttpClient) { }

  getRoster(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  addStaff(staff: any): Observable<any> {
    return this.http.post(this.apiUrl, staff);
  }
}
