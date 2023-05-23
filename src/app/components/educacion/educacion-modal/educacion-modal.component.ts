import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EducacionDTO } from 'src/app/dto/educacion-dto';
import { EducacionService } from 'src/app/services/educacion.service';

@Component({
  selector: 'app-educacion-modal',
  templateUrl: './educacion-modal.component.html',
  styleUrls: ['./educacion-modal.component.css'],
})
export class EducacionModalComponent {
  @Output() eventEducacion = new EventEmitter();
  form: FormGroup;
  modoEdicion: boolean = false;

  constructor(
    private fb: FormBuilder,
    private educacionService: EducacionService
  ) {
    this.form = this.fb.nonNullable.group({
      id: [0, [Validators.required]],
      titulo: ['', [Validators.required]],
      escuela: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      imgUrl: ['', [Validators.required]],
      webUrl: ['', [Validators.required]],
      inicio: ['', [Validators.required]],
      fin: ['', [Validators.required]],
    });
  }

  onEditar(educacionDTO: EducacionDTO): void {
    this.form.patchValue(educacionDTO);
    this.modoEdicion = true;
  }

  onAgregar(): void {
    this.modoEdicion = false;
    this.form.reset();
  }

  onSubmit(): void {
    let educacionForm: EducacionDTO = this.form.value;

    if (this.modoEdicion) {
      this.editarEducacion(educacionForm);
    } else {
      this.guardarEducacion(educacionForm);
    }
  }

  private editarEducacion(educacion: EducacionDTO): void {
    let idEducacion: number = educacion.id;
    this.educacionService
      .guardarEducacion(educacion, idEducacion)
      .subscribe(() => this.eventEducacion.emit());
  }

  private guardarEducacion(educacion: EducacionDTO): void {
    this.educacionService
      .nuevaEducacion(educacion)
      .subscribe(() => this.eventEducacion.emit());
  }
}
