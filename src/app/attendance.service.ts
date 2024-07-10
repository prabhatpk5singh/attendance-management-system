import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {
  private apiUrl = 'http://your-backend-api-url/attendance';

  constructor(private http: HttpClient) { }

  markAttendance(image: string): Observable<any> {
    return this.http.post(this.apiUrl, { image });
  }
}
