import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PortfolioDTO } from '../dto/portfolio-dto';
import { PersonaDTO } from '../dto/persona-dto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PortfolioService {
  url: string = `${environment.apiURL}/api/portfolio`;
  constructor(private http: HttpClient) {}

  obtenerDatos(): Observable<PortfolioDTO> {
    return this.http.get<PortfolioDTO>(this.url + '/personas/1');
  }

  guardarPersona(personaActualizada: PersonaDTO): Observable<any> {
    return this.http.put<any>(
      `${environment.apiURL}/api/personas/1`,
      personaActualizada
    );
  }
}
