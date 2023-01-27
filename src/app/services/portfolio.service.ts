import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PortfolioDTO } from '../dto/portfolio-dto';
import { PersonaDTO } from '../dto/persona-dto';
import { ExperienciaDTO } from '../dto/experiencia-dto';
import { EducacionDTO } from '../dto/educacion-dto';
import { TecnologiaDTO } from '../dto/tecnologia-dto';
import { ProyectoDTO } from '../dto/proyecto-dto';

@Injectable({
  providedIn: 'root',
})
export class PortfolioService {
  url: string = 'https://portfolio-mgmarquez.koyeb.app/api/portfolio';
  constructor(private http: HttpClient) {}

  obtenerDatos(): Observable<PortfolioDTO> {
    return this.http.get<PortfolioDTO>(this.url + '/personas/1');
  }

  guardarPersona(personaActualizada: PersonaDTO): Observable<any> {
    return this.http.put<any>(
      'https://portfolio-mgmarquez.koyeb.app/api/personas/1',
      personaActualizada
    );
  }

  guardarProyecto(
    proyectoActualizado: ProyectoDTO,
    idProyecto: number
  ): Observable<ProyectoDTO> {
    return this.http.put<ProyectoDTO>(
      'https://portfolio-mgmarquez.koyeb.app/api/personas/1/proyectos/' +
        idProyecto,
      proyectoActualizado
    );
  }

  nuevoProyecto(proyecto: ProyectoDTO): Observable<ProyectoDTO> {
    return this.http.post<ProyectoDTO>(
      'https://portfolio-mgmarquez.koyeb.app/api/personas/1/proyectos/',
      proyecto
    );
  }

  eliminarProyecto(idProyecto: number): Observable<any> {
    return this.http.delete<any>(
      'https://portfolio-mgmarquez.koyeb.app/api/personas/1/proyectos/' +
        idProyecto
    );
  }
}
