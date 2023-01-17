import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { TecnologiaDTO } from '../../dto/tecnologia-dto';

@Component({
  selector: 'app-aptitudes',
  templateUrl: './aptitudes.component.html',
  styleUrls: ['./aptitudes.component.css'],
})
export class AptitudesComponent implements OnInit {
  tecnologiaList: TecnologiaDTO[] = [];
  form!: FormGroup;
  modoEdicion: boolean = false;

  constructor(
    private datosPortfolio: PortfolioService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      id: [0, [Validators.required]],
      nombre: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      imgUrl: ['', [Validators.required]],
      progreso: [0, [Validators.required]],
    });

    this.datosPortfolio.obtenerDatos().subscribe((data) => {
      this.tecnologiaList = data.tecnologias;
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

    this.datosPortfolio
      .guardarTecnologia(tecnologiaForm, idTecnologia)
      .subscribe((data) => {
        this.tecnologiaList = this.tecnologiaList.map((tec) =>
          tec.id !== idTecnologia ? tec : data
        );
      });
  }

  private guardarTecnologia(): void {
    let nuevaTecnologia: TecnologiaDTO = this.form.value;
    this.datosPortfolio.nuevaTecnologia(nuevaTecnologia).subscribe((data) => {
      this.tecnologiaList.push(data);
    });
  }

  onAgregar(): void {
    this.modoEdicion = false;
    this.form.reset();
  }
}
