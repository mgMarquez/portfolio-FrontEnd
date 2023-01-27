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
  form: FormGroup;
  modoEdicion: boolean = false;

  constructor(
    private proyectoService: ProyectoService,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      id: [0, [Validators.required]],
      titulo: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      imgUrl: ['', [Validators.required]],
      webUrl: ['', [Validators.required]],
    });
  }

  onEditar(proyectoDTO: ProyectoDTO): void {
    this.form.patchValue(proyectoDTO);
    this.modoEdicion = true;
  }

  onSubmit(): void {
    if (this.modoEdicion) {
      this.editarProyecto();
    } else {
      this.guardarProyecto();
    }
  }

  private editarProyecto(): void {
    let proyectoForm: ProyectoDTO = this.form.value;

    let idProyecto: number = proyectoForm.id;

    this.proyectoService
      .guardarProyecto(proyectoForm, idProyecto)
      .subscribe((data) => {
        this.proyectoList = this.proyectoList.map((proy) =>
          proy.id !== idProyecto ? proy : data
        );
      });
  }

  private guardarProyecto(): void {
    let nuevaProyecto: ProyectoDTO = this.form.value;
    this.proyectoService.nuevoProyecto(nuevaProyecto).subscribe((data) => {
      this.proyectoList.push(data);
    });
  }

  onAgregar(): void {
    this.modoEdicion = false;
    this.form.reset();
  }

  onEliminar(idProyecto: number): void {
    this.proyectoService.eliminarProyecto(idProyecto).subscribe((data) => {
      this.proyectoList = this.proyectoList.filter(
        (proy) => proy.id !== idProyecto
      );
    });
  }
}
