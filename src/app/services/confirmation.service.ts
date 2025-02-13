import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ConfirmationData {
  nomeCompleto: string;
  cpf: string;
  chave: string;
}

@Injectable({
  providedIn: 'root'
})
export class ConfirmationService {
  private apiUrl = 'SUA_URL_API_AQUI'; // Substitua pela URL real da sua API

  constructor(private http: HttpClient) {}

  submitConfirmation(data: ConfirmationData): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
}