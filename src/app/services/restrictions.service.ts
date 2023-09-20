import { Injectable } from '@angular/core';
import { Restriction } from '../models/restriction';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestrictionsService {

  constructor(private http: HttpClient) {}

  getRestrictions(): Observable<Restriction[]> {
    return this.http.get<Restriction[]>('http://localhost:3000/api/restrictions');
  }
}
