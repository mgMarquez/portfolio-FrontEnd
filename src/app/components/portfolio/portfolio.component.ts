import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { PortfolioDTO } from '../../dto/portfolio-dto';
import { PersonaDTO } from '../../dto/persona-dto';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent implements OnInit {
  portfolio: PortfolioDTO;

  constructor(private portfolioService: PortfolioService) {
    this.portfolio = new PortfolioDTO();
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
