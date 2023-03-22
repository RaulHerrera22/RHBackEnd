import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';



@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  
  URL = 'http://localhost:8080/personas';

  constructor(private httpClient: HttpClient) { }

  public getPersona(): Observable<persona>{
    return this.httpClient.get<persona>(this.URL + '/traer/perfil');
    }
  
    public findPersona(id: number): Observable<persona> {
      return this.httpClient.get<persona>(this.URL + `detail/${id}`);
    }
  
    public createPersona(Persona: persona): Observable<any> {
      return this.httpClient.post<any>(this.URL + 'new', persona);
    }
  
    public editarPersona(id: number, Persona: persona): Observable<any> {
      return this.httpClient.put<any>(this.URL + `edit/${id}`, persona);
    }
  
    public deletePersona(id: number): Observable<any> {
      return this.httpClient.delete<any>(this.URL + `delete/${id}`);
    }
}
