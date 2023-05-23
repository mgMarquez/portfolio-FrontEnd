import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProyectoDTO } from '../dto/proyecto-dto';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProyectoService {
  url: string = `${environment.apiURL}/api/personas/1/proyectos`;

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

  obtenerTodosProyectos(): Observable<ProyectoDTO[]> {
    return this.http.get<ProyectoDTO[]>(`${this.url}`);
  }
}
