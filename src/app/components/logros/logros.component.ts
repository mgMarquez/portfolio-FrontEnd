import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { ProyectoDTO } from '../../dto/proyecto-dto';

@Component({
  selector: 'app-logros',
  templateUrl: './logros.component.html',
  styleUrls: ['./logros.component.css'],
})
export class LogrosComponent implements OnInit {
  proyectoList: ProyectoDTO[] = [];
  form!: FormGroup;

  constructor(
    private datosPortfolio: PortfolioService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      id: [0, [Validators.required]],
      titulo: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      imgUrl: ['', [Validators.required]],
      webUrl: ['', [Validators.required]]
    });

    this.datosPortfolio.obtenerDatos().subscribe((data) => {
      this.proyectoList = data.proyectos;
    });
  }

  onEditar(proyectoDTO: ProyectoDTO): void {
    this.form.patchValue(proyectoDTO);
  }

  onSubmit(): void {
    let proyectoForm: ProyectoDTO = this.form.value;

    let idProyecto: number = proyectoForm.id;

    this.datosPortfolio.guardarProyecto(proyectoForm, idProyecto).subscribe((data) => {
      this.proyectoList = this.proyectoList
        .map(proy => proy.id !== idProyecto ? proy : data);
    });
  }
}
