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
  form: FormGroup;
  modoEdicion: boolean = false;

  constructor(
    private tecnologiaService: TecnologiaService,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      id: [0, [Validators.required]],
      nombre: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      imgUrl: ['', [Validators.required]],
      progreso: [0, [Validators.required]],
    });
  }

  onEditar(tecnologiaDTO: TecnologiaDTO): void {
    this.form.patchValue(tecnologiaDTO);
    this.modoEdicion = true;
  }

  onSubmit(): void {
    if (this.modoEdicion) {
      this.editarTecnologia();
    } else {
      this.guardarTecnologia();
    }
  }

  private editarTecnologia(): void {
    let tecnologiaForm: TecnologiaDTO = this.form.value;
    let idTecnologia: number = tecnologiaForm.id;

    this.tecnologiaService
      .guardarTecnologia(tecnologiaForm, idTecnologia)
      .subscribe((data) => {
        this.tecnologiaList = this.tecnologiaList.map((tec) =>
          tec.id !== idTecnologia ? tec : data
        );
      });
  }

  private guardarTecnologia(): void {
    let nuevaTecnologia: TecnologiaDTO = this.form.value;
    this.tecnologiaService
      .nuevaTecnologia(nuevaTecnologia)
      .subscribe((data) => {
        this.tecnologiaList.push(data);
      });
  }

  onAgregar(): void {
    this.modoEdicion = false;
    this.form.reset();
  }

  onEliminar(idTecnologiia: number): void {
    this.tecnologiaService
      .eliminarTecnologia(idTecnologiia)
      .subscribe((data) => {
        this.tecnologiaList = this.tecnologiaList.filter(
          (tec) => tec.id !== idTecnologiia
        );
      });
  }
}
