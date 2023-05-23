import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ExperienciaDTO } from '../dto/experiencia-dto';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ExperienciaService {
  url: string = `${environment.apiURL}/api/personas/1/experiencias`;

  constructor(private http: HttpClient) {}

  guardarExperiencia(
    experienciaActualizada: ExperienciaDTO,
    idExperiencia: number
  ): Observable<ExperienciaDTO> {
    return this.http.put<ExperienciaDTO>(
      `${this.url}/${idExperiencia}`,
      experienciaActualizada
    );
  }

  nuevaExperiencia(experiencia: ExperienciaDTO): Observable<ExperienciaDTO> {
    return this.http.post<ExperienciaDTO>(`${this.url}`, experiencia);
  }

  eliminarExperiencia(idExperiencia: number): Observable<any> {
    return this.http.delete<any>(`${this.url}/${idExperiencia}`);
  }

  obtenerTodasExperiencias(): Observable<ExperienciaDTO[]> {
    return this.http.get<ExperienciaDTO[]>(`${this.url}`);
  }
}
