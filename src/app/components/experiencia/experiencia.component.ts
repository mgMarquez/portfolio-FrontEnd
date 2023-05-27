import { Component, Input } from '@angular/core';
import { ExperienciaDTO } from '../../dto/experiencia-dto';
import { ExperienciaService } from '../../services/experiencia.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css'],
})
export class ExperienciaComponent {
  @Input() experienciaList: ExperienciaDTO[] = [];
  @Input() isLogged: boolean = false;

  constructor(private experienciaService: ExperienciaService) {}

  onEliminar(idExperiencia: number): void {
    this.experienciaService.eliminarExperiencia(idExperiencia).subscribe(() => {
      this.experienciaList = this.experienciaList.filter(
        (exp) => exp.id !== idExperiencia
      );
    });
  }

  cargarListaExperiencias(): void {
    this.experienciaService.obtenerTodasExperiencias().subscribe((exp) => {
      this.experienciaList = exp;
    });
  }
}
