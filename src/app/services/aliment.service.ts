import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Aliment } from '../models/aliment';
import { Observable } from 'rxjs';
import { NewAliment } from '../models/newAliment';
import { DataOneAliment } from '../models/dataOneAliment';

@Injectable({
  providedIn: 'root',
})
export class AlimentService {
  constructor(private http: HttpClient) {}

  getAliments(): Observable<Aliment[]> {
    return this.http.get<Aliment[]>('http://localhost:3000/api/aliments');
  }

  createAliment(aliment: NewAliment): Observable<DataOneAliment> {
    const headers = this.setHeaders();
    return this.http.post<DataOneAliment>('http://localhost:3000/api/aliments', aliment, { headers });
  }

  private setHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }
}