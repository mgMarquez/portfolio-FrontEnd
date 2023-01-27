import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PersonaDTO } from '../../dto/persona-dto';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css'],
})
export class EncabezadoComponent {
  @Input() persona: PersonaDTO = new PersonaDTO();
  @Output() onUpdatePersona: EventEmitter<PersonaDTO> = new EventEmitter();
  form: FormGroup;

  constructor(private FormBuilder: FormBuilder) {
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

    this.onUpdatePersona.emit(copiaPersona);
  }
}
