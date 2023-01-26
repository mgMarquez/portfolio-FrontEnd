import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  constructor(private autenticacionServicio:AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    var currentUser = this.autenticacionServicio.UsuarioAutenticado;
    if (currentUser && currentUser.token) {
      req = req.clone({
        setHeaders:{
          Authorizatiom: `Bearer ${currentUser.token}`
        }
      })
    }
    return next.handle(req);
  }
}
