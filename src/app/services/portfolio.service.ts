import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PortfolioDTO } from '../dto/portfolio-dto';
import { PersonaDTO } from '../dto/persona-dto';
import { ExperienciaDTO } from '../dto/experiencia-dto';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  url:string = "https://portfolio-mgmarquez.koyeb.app/api/portfolio";
  constructor(private http:HttpClient) { }

  obtenerDatos() : Observable<PortfolioDTO>{
    return this.http.get<PortfolioDTO>(this.url+"/personas/1");
  }

  guardarPersona(personaActualizada: PersonaDTO): Observable<any> {
    return this.http.put<any>("https://portfolio-mgmarquez.koyeb.app/api/personas/1", personaActualizada);
  }

  guardarExperiencia(experienciaActualizada: ExperienciaDTO, idExperiencia: number): Observable<ExperienciaDTO> {
    return this.http.put<ExperienciaDTO>("https://portfolio-mgmarquez.koyeb.app/api/personas/1/experiencias/" + idExperiencia, experienciaActualizada);
  }
}
