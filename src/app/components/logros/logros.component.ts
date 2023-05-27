import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProyectoDTO } from '../../dto/proyecto-dto';
import { ProyectoService } from '../../services/proyecto.service';

@Component({
  selector: 'app-logros',
  templateUrl: './logros.component.html',
  styleUrls: ['./logros.component.css'],
})
export class LogrosComponent {
  @Input() proyectoList: ProyectoDTO[] = [];
  @Input() isLogged: boolean = false;

  constructor(private proyectoService: ProyectoService) {}

  onEliminar(idProyecto: number): void {
    this.proyectoService.eliminarProyecto(idProyecto).subscribe((data) => {
      this.proyectoList = this.proyectoList.filter(
        (proy) => proy.id !== idProyecto
      );
    });
  }

  cargarProyectos(): void {
    this.proyectoService
      .obtenerTodosProyectos()
      .subscribe((proy) => (this.proyectoList = proy));
  }
}
