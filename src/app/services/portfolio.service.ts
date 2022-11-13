import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  url:string = "https://portfolio-mgmarquez.koyeb.app/api";
  constructor(private http:HttpClient) { }

  obtenerDatos() : Observable<any>{
    return this.http.get(this.url+"/portfolio");
  }
}
