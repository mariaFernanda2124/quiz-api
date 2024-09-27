import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {

  private apiUrl = 'https://rickandmortyapi.com/api';

  constructor(private http: HttpClient) { }

  getCharacters(): Observable<any> {
    return this.http.get(`${this.apiUrl}/character`);
  }

  getCharacterById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/character/${id}`);
  }

  getCharacterEpisodes(id: number): Observable<any[]> {
    return this.http.get<any>(`${this.apiUrl}/character/${id}/episode`); // Asegúrate de que este endpoint sea correcto
  }
}