import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { objectif } from '../models/objectif';

@Injectable()
export class objectifService {
  constructor(private http: HttpClient) {}

  get(): Observable<objectif[]> {
    return this.http.get<objectif[]>(
      environment.ProgramApiBaseUrl + '/objectif'
    );
  }

  delete(id: number): Observable<string> {
    return this.http.delete<string>(
      environment.ProgramApiBaseUrl + '/objectif/' + id
    );
  }

  update(objectif: objectif): Observable<string> {
    return this.http.put<string>(
      environment.ProgramApiBaseUrl + '/objectif/' + objectif.id,
      objectif
    );
  }

  create(objectif: objectif): Observable<string> {
    return this.http.post<string>(
      environment.ProgramApiBaseUrl + '/objectif',
      objectif
    );
  }

  getById(id: number): Observable<objectif> {
    return this.http.get<objectif>(
      environment.ProgramApiBaseUrl + '/objectif/' + id
    );
  }
}
