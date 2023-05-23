import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProyectoDTO } from 'src/app/dto/proyecto-dto';
import { ProyectoService } from 'src/app/services/proyecto.service';

@Component({
  selector: 'app-logros-modal',
  templateUrl: './logros-modal.component.html',
  styleUrls: ['./logros-modal.component.css'],
})
export class LogrosModalComponent {
  @Output() eventProyecto = new EventEmitter();
  form: FormGroup;
  modoEdicion: boolean = false;

  constructor(
    private proyectoService: ProyectoService,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.nonNullable.group({
      id: [0, [Validators.required]],
      titulo: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      imgUrl: ['', [Validators.required]],
      webUrl: ['', [Validators.required]],
    });
  }

  onEditar(proyectoDTO: ProyectoDTO): void {
    this.modoEdicion = true;
    this.form.patchValue(proyectoDTO);
  }

  onAgregar(): void {
    this.modoEdicion = false;
    this.form.reset();
  }

  onSubmit(): void {
    let proyecto: ProyectoDTO = this.form.value;

    if (this.modoEdicion) {
      this.editarProyecto(proyecto);
    } else {
      this.guardarProyecto(proyecto);
    }
  }

  private editarProyecto(proyecto: ProyectoDTO): void {
    let idProyecto: number = proyecto.id;

    this.proyectoService
      .guardarProyecto(proyecto, idProyecto)
      .subscribe(() => this.eventProyecto.emit());
  }

  private guardarProyecto(proyecto: ProyectoDTO): void {
    this.proyectoService
      .nuevoProyecto(proyecto)
      .subscribe(() => this.eventProyecto.emit());
  }
}
