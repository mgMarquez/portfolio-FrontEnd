import { Component, Input, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { PortfolioDTO } from '../../dto/portfolio-dto';
import { PersonaDTO } from '../../dto/persona-dto';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent implements OnInit {
  portfolio: PortfolioDTO;
  isLogged: boolean = false;

  constructor(
    private portfolioService: PortfolioService,
    private authService: AuthService
  ) {
    this.portfolio = new PortfolioDTO();
    this.comprobarSesion();
  }

  comprobarSesion(): void {
    let currentUser = this.authService.UsuarioAutenticado;
    if (currentUser && currentUser.token) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  ngOnInit(): void {
    this.cargarDatosPortfolio();
  }

  cargarDatosPortfolio(): void {
    this.portfolioService.obtenerDatos().subscribe((portfolio) => {
      this.portfolio = portfolio;
    });
  }

  updatePersona(persona: PersonaDTO): void {
    this.portfolioService.guardarPersona(persona).subscribe((data) => {
      this.portfolio.persona = data;
    });
  }
}
