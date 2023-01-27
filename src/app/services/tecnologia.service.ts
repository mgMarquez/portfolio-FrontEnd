import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TecnologiaDTO } from '../dto/tecnologia-dto';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TecnologiaService {
  url: string =
    'https://portfolio-mgmarquez.koyeb.app/api/personas/1/tecnologias';

  constructor(private http: HttpClient) {}

  guardarTecnologia(
    tecnologiaActualizada: TecnologiaDTO,
    idTecnologia: number
  ): Observable<TecnologiaDTO> {
    return this.http.put<TecnologiaDTO>(
      `${this.url}/${idTecnologia}`,
      tecnologiaActualizada
    );
  }

  nuevaTecnologia(tecnologia: TecnologiaDTO): Observable<TecnologiaDTO> {
    return this.http.post<TecnologiaDTO>(`${this.url}`, tecnologia);
  }

  eliminarTecnologia(idTecnologia: number): Observable<any> {
    return this.http.delete<any>(`${this.url}/${idTecnologia}`);
  }
}
