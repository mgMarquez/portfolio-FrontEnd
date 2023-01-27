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
  form: FormGroup;
  modoEdicion: boolean = false;

  constructor(
    private educacionService: EducacionService,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
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

  onSubmit(): void {
    if (this.modoEdicion) {
      this.editarEducacion();
    } else {
      this.guardarEducacion();
    }
  }

  private editarEducacion(): void {
    let educacionForm: EducacionDTO = this.form.value;

    let idEducacion: number = educacionForm.id;
    this.educacionService
      .guardarEducacion(educacionForm, idEducacion)
      .subscribe((data) => {
        this.educacionList = this.educacionList.map((edu) =>
          edu.id !== idEducacion ? edu : data
        );
      });
  }

  private guardarEducacion(): void {
    let nuevaEducacion: EducacionDTO = this.form.value;
    console.log(nuevaEducacion);
    this.educacionService.nuevaEducacion(nuevaEducacion).subscribe((data) => {
      console.log(data);
      this.educacionList.push(data);
    });
  }

  onAgregar(): void {
    this.modoEdicion = false;
    this.form.reset();
  }

  onEliminar(idEducacion: number): void {
    this.educacionService.eliminarEducacion(idEducacion).subscribe((data) => {
      console.log(data);
      this.educacionList = this.educacionList.filter(
        (edu) => edu.id !== idEducacion
      );
    });
  }
}
