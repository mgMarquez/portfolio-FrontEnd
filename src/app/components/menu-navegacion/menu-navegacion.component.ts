import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-menu-navegacion',
  templateUrl: './menu-navegacion.component.html',
  styleUrls: ['./menu-navegacion.component.css'],
})
export class MenuNavegacionComponent implements OnInit {
  @Input() isLogged: boolean = false;
  @Output() event: EventEmitter<any> = new EventEmitter();
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.event.emit();
  }

  onLogin(): void {
    this.router.navigate(['/login']);
  }

  onLogout(): void {
    this.authService.CerrarSesion();
    this.event.emit();
    window.location.reload();
  }
}
