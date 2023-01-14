import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PortfolioDTO } from '../dto/portfolio-dto';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  url:string = "https://portfolio-mgmarquez.koyeb.app/api/portfolio";
  constructor(private http:HttpClient) { }

  obtenerDatos() : Observable<PortfolioDTO>{
    return this.http.get<PortfolioDTO>(this.url+"/personas/1");
  }
}
