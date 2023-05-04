import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { programme } from '../models/programme';

@Injectable()
export class programmeService {
  constructor(private http: HttpClient) {}

  get(): Observable<programme[]> {
    return this.http.get<programme[]>(
      environment.ProgramApiBaseUrl + '/programme'
    );
  }

  delete(id: number): Observable<string> {
    return this.http.delete<string>(
      environment.ProgramApiBaseUrl + '/programme/' + id
    );
  }

  update(programme: programme): Observable<string> {
    return this.http.put<string>(
      environment.ProgramApiBaseUrl + '/programme/' + programme.id,
      programme
    );
  }

  create(programme: programme): Observable<string> {
    return this.http.post<string>(
      environment.ProgramApiBaseUrl + '/programme',
      programme
    );
  }

  getById(id: number): Observable<programme> {
    return this.http.get<programme>(
      environment.ProgramApiBaseUrl + '/programme/' + id
    );
  }
}
