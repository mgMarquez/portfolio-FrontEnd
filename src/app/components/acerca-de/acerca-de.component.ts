import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PersonaDTO } from '../../dto/persona-dto';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css'],
})
export class AcercaDeComponent {
  @Input() persona: PersonaDTO = new PersonaDTO();
  @Output() onUpdateAcercaDe: EventEmitter<PersonaDTO> = new EventEmitter();
  @Input() isLogged: boolean = false;

  form: FormGroup;

  constructor(private FormBuilder: FormBuilder) {
    this.form = this.FormBuilder.group({
      acercaDe: ['', [Validators.required]],
    });
  }

  onEditar(): void {
    this.form.patchValue(this.persona);
  }

  onSubmit(): void {
    let copiaPersona: PersonaDTO = { ...this.persona };
    let personaForm: PersonaDTO = this.form.value;

    copiaPersona.acercaDe = personaForm.acercaDe;

    this.onUpdateAcercaDe.emit(copiaPersona);
  }
}
