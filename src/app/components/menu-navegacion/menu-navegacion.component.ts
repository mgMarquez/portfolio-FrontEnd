import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-menu-navegacion',
  templateUrl: './menu-navegacion.component.html',
  styleUrls: ['./menu-navegacion.component.css']
})
export class MenuNavegacionComponent implements OnInit {
  isLogged: boolean = false;
  constructor(private router:Router, private authService:AuthService) { }

  ngOnInit(): void {
    if(this.authService.UsuarioAutenticado) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  onLogin(): void {
    this.router.navigate(['/login']);
  }

  onLogout(): void {
    this.authService.CerrarSesion();
    window.location.reload();
  }
}
