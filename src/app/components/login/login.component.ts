import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder, 
              private autenticacionService:AuthService,
              private ruta:Router) { 
    this.form = this.formBuilder.group(
        {
          nombreUsuario:['', [Validators.required, Validators.minLength(3)]],
          password:['', [Validators.required, Validators.minLength(3)]]
        }
      )
  }
  
  ngOnInit(): void {
  }

  get NombreUsuario() {
    return this.form.get('nombreUsuario');
  }

  get Password() {
    return this.form.get('password');
  }

  onEnviar(event:Event) {
    event.preventDefault;
    this.autenticacionService.IniciarSesion(this.form.value)
      .subscribe(data => {
        console.log("Data: " + JSON.stringify(data));
        this.ruta.navigate(['/portfolio']);
      })
  }
}
