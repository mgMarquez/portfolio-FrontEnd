import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { PersonaDTO } from '../../dto/persona-dto';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css'],
})
export class EncabezadoComponent {
  @Input() persona: PersonaDTO = new PersonaDTO();
  form: FormGroup;

  constructor(
    private datosPorfolio: PortfolioService,
    private FormBuilder: FormBuilder
  ) {
    this.form = this.FormBuilder.group({
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      profesion: ['', [Validators.required]],
      ubicacion: ['', [Validators.required]],
      fotoUrl: ['', [Validators.required]],
      bannerUrl: ['', [Validators.required]],
    });
  }

  onEditar(): void {
    this.form.patchValue(this.persona);
  }

  onSubmit(): void {
    let copiaPersona: PersonaDTO = { ...this.persona };
    let personaForm: PersonaDTO = this.form.value;

    copiaPersona.nombre = personaForm.nombre;
    copiaPersona.apellido = personaForm.apellido;
    copiaPersona.profesion = personaForm.profesion;
    copiaPersona.ubicacion = personaForm.ubicacion;
    copiaPersona.fotoUrl = personaForm.fotoUrl;
    copiaPersona.bannerUrl = personaForm.bannerUrl;

    console.log(copiaPersona);
    this.datosPorfolio.guardarPersona(copiaPersona).subscribe((data) => {
      console.log(data);
      this.persona = data;
    });
  }
}
