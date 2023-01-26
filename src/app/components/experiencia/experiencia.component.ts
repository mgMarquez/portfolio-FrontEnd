import { Component, Input, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { ExperienciaDTO } from '../../dto/experiencia-dto';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css'],
})
export class ExperienciaComponent {
  @Input() experienciaList: ExperienciaDTO[] = [];
  form: FormGroup;
  modoEdicion: boolean = false;

  constructor(
    private datosPortfolio: PortfolioService,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      id: [0, [Validators.required]],
      posicion: ['', [Validators.required]],
      compania: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      imgUrl: ['', [Validators.required]],
      webUrl: ['', [Validators.required]],
      inicio: ['', [Validators.required]],
      fin: ['', [Validators.required]],
    });
  }

  onEditar(experienciaDTO: ExperienciaDTO): void {
    this.form.patchValue(experienciaDTO);
    this.modoEdicion = true;
  }

  onSubmit(): void {
    if (this.modoEdicion) {
      this.editarExperiencia();
    } else {
      this.guardarExperiencia();
    }
  }

  private editarExperiencia(): void {
    let experienciaForm: ExperienciaDTO = this.form.value;

    let idExperiencia: number = experienciaForm.id;
    this.datosPortfolio
      .guardarExperiencia(experienciaForm, idExperiencia)
      .subscribe((data) => {
        this.experienciaList = this.experienciaList.map((exp) =>
          exp.id !== idExperiencia ? exp : data
        );
      });
  }

  private guardarExperiencia(): void {
    let nuevaExperiencia: ExperienciaDTO = this.form.value;
    this.datosPortfolio.nuevaExperiencia(nuevaExperiencia).subscribe((data) => {
      this.experienciaList.push(data);
    });
  }

  onAgregar(): void {
    this.modoEdicion = false;
    this.form.reset();
  }

  onEliminar(idExperiencia: number): void {
    this.datosPortfolio.eliminarExperiencia(idExperiencia).subscribe((data) => {
      this.experienciaList = this.experienciaList.filter(
        (exp) => exp.id !== idExperiencia
      );
    });
  }
}
