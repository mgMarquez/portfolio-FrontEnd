import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { PersonaDTO } from '../../dto/persona-dto';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css'],
})
export class AcercaDeComponent implements OnInit {
  persona: PersonaDTO = new PersonaDTO();
  form!: FormGroup;

  constructor(private datosPorfolio: PortfolioService,
    private FormBuilder:FormBuilder) {}

  ngOnInit(): void {
    this.form = this.FormBuilder.group({
      acercaDe: ['', [Validators.required]]
    });
    this.datosPorfolio.obtenerDatos().subscribe((data) => {
      this.persona = data.persona;
    });
  }

  onEditar(): void {
    this.form.patchValue(this.persona);
  }

  onSubmit(): void {
    let copiaPersona: PersonaDTO = {...this.persona};
    let personaForm: PersonaDTO = this.form.value;

    copiaPersona.acercaDe = personaForm.acercaDe;

    this.datosPorfolio.guardarPersona(copiaPersona).subscribe(data => {
      console.log(data);
      this.persona = data;
    })
    
  }
}
