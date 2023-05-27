import { Component, Input, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { EducacionDTO } from '../../dto/educacion-dto';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EducacionService } from '../../services/educacion.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css'],
})
export class EducacionComponent {
  @Input() educacionList: EducacionDTO[] = [];
  @Input() isLogged: boolean = false;

  constructor(private educacionService: EducacionService) {}

  onEliminar(idEducacion: number): void {
    this.educacionService.eliminarEducacion(idEducacion).subscribe((data) => {
      this.educacionList = this.educacionList.filter(
        (edu) => edu.id !== idEducacion
      );
    });
  }

  cargarListaEducacion(): void {
    this.educacionService.obtenerTodasEducacion().subscribe((edu) => {
      this.educacionList = edu;
    });
  }
}
