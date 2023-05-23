import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ExperienciaDTO } from 'src/app/dto/experiencia-dto';
import { ExperienciaService } from 'src/app/services/experiencia.service';

@Component({
  selector: 'app-experiencia-modal',
  templateUrl: './experiencia-modal.component.html',
  styleUrls: ['./experiencia-modal.component.css'],
})
export class ExperienciaModalComponent {
  @Output() eventData = new EventEmitter();
  modoEdicion: boolean = false;
  formExperiencia: FormGroup;

  constructor(
    private fb: FormBuilder,
    private experienciaService: ExperienciaService
  ) {
    this.formExperiencia = this.fb.nonNullable.group({
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
    this.modoEdicion = true;
    this.formExperiencia.patchValue(experienciaDTO);
  }

  onAgregar(): void {
    this.modoEdicion = false;
    this.formExperiencia.reset();
  }

  onSubmit(): void {
    if (this.modoEdicion) {
      this.editarExperiencia();
    } else {
      this.guardarExperiencia();
    }
  }

  private guardarExperiencia(): void {
    let nuevaExperiencia: ExperienciaDTO = this.formExperiencia.value;
    this.experienciaService
      .nuevaExperiencia(nuevaExperiencia)
      .subscribe(() => this.eventData.emit());
  }

  private editarExperiencia(): void {
    let experienciaForm: ExperienciaDTO = this.formExperiencia.value;

    let idExperiencia: number = experienciaForm.id;
    this.experienciaService
      .guardarExperiencia(experienciaForm, idExperiencia)
      .subscribe(() => this.eventData.emit());
  }

  get posicionInvalid() {
    return this.posicion?.errors && this.posicion?.touched;
  }

  get posicion() {
    return this.formExperiencia.get('posicion');
  }
}
