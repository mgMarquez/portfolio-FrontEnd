import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TecnologiaDTO } from 'src/app/dto/tecnologia-dto';
import { TecnologiaService } from 'src/app/services/tecnologia.service';

@Component({
  selector: 'app-aptitudes-modal',
  templateUrl: './aptitudes-modal.component.html',
  styleUrls: ['./aptitudes-modal.component.css'],
})
export class AptitudesModalComponent {
  @Output() eventAptitud = new EventEmitter();
  form: FormGroup;
  modoEdicion: boolean = false;

  constructor(
    private tecnologiaService: TecnologiaService,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      id: [0, [Validators.required]],
      nombre: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      imgUrl: ['', [Validators.required]],
      progreso: [0, [Validators.required]],
    });
  }

  onAgregar(): void {
    this.modoEdicion = false;
    this.form.reset();
  }

  onEditar(tecnologiaDTO: TecnologiaDTO): void {
    this.form.patchValue(tecnologiaDTO);
    this.modoEdicion = true;
  }

  onSubmit(): void {
    let tecnologiaForm: TecnologiaDTO = this.form.value;

    if (this.modoEdicion) {
      this.editarTecnologia(tecnologiaForm);
    } else {
      this.guardarTecnologia(tecnologiaForm);
    }
  }

  private editarTecnologia(tecnologia: TecnologiaDTO): void {
    let idTecnologia: number = tecnologia.id;

    this.tecnologiaService
      .guardarTecnologia(tecnologia, idTecnologia)
      .subscribe(() => this.eventAptitud.emit());
  }

  private guardarTecnologia(tecnologia: TecnologiaDTO): void {
    this.tecnologiaService
      .nuevaTecnologia(tecnologia)
      .subscribe(() => this.eventAptitud.emit());
  }
}
