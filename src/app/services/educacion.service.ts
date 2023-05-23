import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EducacionDTO } from '../dto/educacion-dto';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EducacionService {
  url: string = `${environment.apiURL}/api/personas/1/educaciones`;

  constructor(private http: HttpClient) {}

  guardarEducacion(
    educacionActualizada: EducacionDTO,
    idEducacion: number
  ): Observable<EducacionDTO> {
    return this.http.put<EducacionDTO>(
      `${this.url}/${idEducacion}`,
      educacionActualizada
    );
  }

  nuevaEducacion(educacion: EducacionDTO): Observable<EducacionDTO> {
    return this.http.post<EducacionDTO>(`${this.url}`, educacion);
  }

  eliminarEducacion(idEducacion: number): Observable<any> {
    return this.http.delete<any>(`${this.url}/${idEducacion}`);
  }

  obtenerTodasEducacion(): Observable<EducacionDTO[]> {
    return this.http.get<EducacionDTO[]>(`${this.url}`);
  }
}
