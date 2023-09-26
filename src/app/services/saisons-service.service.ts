import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Saison } from '../models/saison';

@Injectable({
  providedIn: 'root'
})
export class SaisonsServiceService {
constructor(private http: HttpClient) {}

  getSaisons(): Observable<Saison[]> {
    return this.http.get<Saison[]>('http://localhost:3000/api/saisons');
  }
}
