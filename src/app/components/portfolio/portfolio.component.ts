import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { PortfolioDTO } from '../../dto/portfolio-dto';

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
    this.portfolioService.obtenerDatos().subscribe((portfolio) => {
      this.portfolio = portfolio;
    });
  }
}
