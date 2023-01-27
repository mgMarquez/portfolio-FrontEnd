import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProyectoDTO } from '../dto/proyecto-dto';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProyectoService {
  url: string =
    'https://portfolio-mgmarquez.koyeb.app/api/personas/1/proyectos';

  constructor(private http: HttpClient) {}

  guardarProyecto(
    proyectoActualizado: ProyectoDTO,
    idProyecto: number
  ): Observable<ProyectoDTO> {
    return this.http.put<ProyectoDTO>(
      `${this.url}/${idProyecto}`,
      proyectoActualizado
    );
  }

  nuevoProyecto(proyecto: ProyectoDTO): Observable<ProyectoDTO> {
    return this.http.post<ProyectoDTO>(`${this.url}`, proyecto);
  }

  eliminarProyecto(idProyecto: number): Observable<any> {
    return this.http.delete<any>(`${this.url}/${idProyecto}`);
  }
}
