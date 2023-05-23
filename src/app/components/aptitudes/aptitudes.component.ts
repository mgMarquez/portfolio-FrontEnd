import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TecnologiaDTO } from '../../dto/tecnologia-dto';
import { TecnologiaService } from '../../services/tecnologia.service';

@Component({
  selector: 'app-aptitudes',
  templateUrl: './aptitudes.component.html',
  styleUrls: ['./aptitudes.component.css'],
})
export class AptitudesComponent {
  @Input() tecnologiaList: TecnologiaDTO[] = [];

  constructor(private tecnologiaService: TecnologiaService) {}

  onEliminar(idTecnologiia: number): void {
    this.tecnologiaService
      .eliminarTecnologia(idTecnologiia)
      .subscribe(() => this.cargarTecnologias());
  }

  cargarTecnologias(): void {
    this.tecnologiaService.obtenerTodasTecnologias().subscribe((tec) => {
      this.tecnologiaList = tec;
    });
  }
}
