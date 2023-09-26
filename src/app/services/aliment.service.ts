import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Aliment } from '../models/aliment';
import { Observable } from 'rxjs';
import { NewAliment } from '../models/newAliment';
import { DataOneAliment } from '../models/dataOneAliment';
import { modifAliment } from '../models/modifAliment';

@Injectable({
  providedIn: 'root',
})
export class AlimentService {
  constructor(private http: HttpClient) {}

  getAliments(): Observable<Aliment[]> {
    return this.http.get<Aliment[]>('http://localhost:3000/api/aliments');
  }

  getAlimentById(alimentId: number): Observable<Aliment> {
    return this.http.get<Aliment>(
      `http://localhost:3000/api/aliments/${alimentId}`
    );
  }

  createAliment(aliment: NewAliment): Observable<DataOneAliment> {
    const headers = this.setHeaders();
    return this.http.post<DataOneAliment>('http://localhost:3000/api/aliments', aliment, { headers });
  }

  updateAliment(alimentID: number, aliment: modifAliment): Observable<DataOneAliment> {
    const headers = this.setHeaders();
    return this.http.patch<DataOneAliment>(
      `http://localhost:3000/api/aliments/${alimentID}`,
      aliment,
      {
        headers,
      }
    );
  }

  deleteAliment(aliment: Aliment): Observable<Aliment> {
    // recup le token dans le localstorage
    const headers = this.setHeaders();
    // console.log(headers);
    return this.http.delete<Aliment>(
      `http://localhost:3000/api/aliments/${aliment.id}`,
      { headers }
    );
  }

  private setHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }
}