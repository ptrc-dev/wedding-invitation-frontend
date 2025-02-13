import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ConfirmationData {
  name: string;
  document: string;
  key: string;
}

@Injectable({
  providedIn: 'root'
})
export class ConfirmationService {
  private apiUrl = 'http://localhost:8080/api/v1/confirmation'; // Substitua pela URL real da sua API

  constructor(private http: HttpClient) {}

  submitConfirmation(data: ConfirmationData): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
}
