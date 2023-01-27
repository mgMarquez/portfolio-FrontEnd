import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ExperienciaDTO } from '../dto/experiencia-dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ExperienciaService {
  url: string =
    'https://portfolio-mgmarquez.koyeb.app/api/personas/1/experiencias';

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
}
