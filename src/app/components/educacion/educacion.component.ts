import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { EducacionDTO } from '../../dto/educacion-dto';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css'],
})
export class EducacionComponent implements OnInit {
  educacionList: EducacionDTO[] = [];
  form!: FormGroup;

  constructor(
    private datosPortfolio: PortfolioService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
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

    this.datosPortfolio.obtenerDatos().subscribe((data) => {
      this.educacionList = data.educaciones;
    });
  }

  onEditar(educacionDTO: EducacionDTO): void {
    this.form.patchValue(educacionDTO);
  }

  onSubmit(): void {
    let educacionForm: EducacionDTO = this.form.value;

    let idEducacion: number = educacionForm.id;
    this.datosPortfolio.guardarEducacion(educacionForm, idEducacion).subscribe((data) => {
      this.educacionList = this.educacionList
        .map(edu => edu.id !== idEducacion ? edu : data);
    });
  }
}
