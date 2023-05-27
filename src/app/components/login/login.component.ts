import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private autenticacionService: AuthService,
    private ruta: Router
  ) {
    this.form = this.formBuilder.group({
      nombreUsuario: ['', [Validators.required, Validators.minLength(5)]],
      password: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  ngOnInit(): void {}

  get NombreUsuario() {
    return this.form.get('nombreUsuario');
  }

  get Password() {
    return this.form.get('password');
  }

  get NombreUsuarioValid() {
    return this.NombreUsuario?.touched && !this.NombreUsuario?.errors;
  }

  get NombreUsuarioInvalid() {
    return this.NombreUsuario?.touched && this.NombreUsuario?.errors;
  }

  get PaswwordValid() {
    return this.Password?.touched && !this.Password?.errors;
  }

  get PaswwordInvalid() {
    return this.Password?.touched && this.Password?.errors;
  }

  onEnviar(event: Event) {
    event.preventDefault;
    this.autenticacionService.IniciarSesion(this.form.value).subscribe({
      next: (v) => {
        console.log(v);
      },
      error: (e) => console.error(e),
      complete: () => {
        this.ruta.navigate(['/portfolio']);
      },
    });
  }
}
