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

  guardarExperiencia(
    experienciaActualizada: ExperienciaDTO,
    idExperiencia: number
  ): Observable<ExperienciaDTO> {
    return this.http.put<ExperienciaDTO>(
      'https://portfolio-mgmarquez.koyeb.app/api/personas/1/experiencias/' +
        idExperiencia,
      experienciaActualizada
    );
  }

  nuevaExperiencia(experiencia: ExperienciaDTO): Observable<ExperienciaDTO> {
    return this.http.post<ExperienciaDTO>(
      'https://portfolio-mgmarquez.koyeb.app/api/personas/1/experiencias/',
      experiencia
    );
  }

  eliminarExperiencia(idExperiencia: number): Observable<any> {
    return this.http.delete<any>(
      'https://portfolio-mgmarquez.koyeb.app/api/personas/1/experiencias/' +
        idExperiencia
    );
  }

  guardarEducacion(
    educacionActualizada: EducacionDTO,
    idEducacion: number
  ): Observable<EducacionDTO> {
    return this.http.put<EducacionDTO>(
      'https://portfolio-mgmarquez.koyeb.app/api/personas/1/educaciones/' +
        idEducacion,
      educacionActualizada
    );
  }

  nuevaEducacion(educacion: EducacionDTO): Observable<EducacionDTO> {
    return this.http.post<EducacionDTO>(
      'https://portfolio-mgmarquez.koyeb.app/api/personas/1/educaciones/',
      educacion
    );
  }

  eliminarEducacion(idEducacion: number): Observable<any> {
    return this.http.delete<any>(
      'https://portfolio-mgmarquez.koyeb.app/api/personas/1/educaciones/' +
      idEducacion
    );
  }

  guardarTecnologia(
    tecnologiaActualizada: TecnologiaDTO,
    idTecnologia: number
  ): Observable<TecnologiaDTO> {
    return this.http.put<TecnologiaDTO>(
      'https://portfolio-mgmarquez.koyeb.app/api/personas/1/tecnologias/' +
        idTecnologia,
      tecnologiaActualizada
    );
  }

  nuevaTecnologia(tecnologia: TecnologiaDTO): Observable<TecnologiaDTO> {
    return this.http.post<TecnologiaDTO>(
      'https://portfolio-mgmarquez.koyeb.app/api/personas/1/tecnologias/',
      tecnologia
    );
  }

  eliminarTecnologia(idTecnologia: number): Observable<any> {
    return this.http.delete<any>(
      'https://portfolio-mgmarquez.koyeb.app/api/personas/1/tecnologias/' +
      idTecnologia
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
