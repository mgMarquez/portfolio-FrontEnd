import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url = `${environment.apiURL}/auth/login`;
  currentUserSubject: BehaviorSubject<any>;

  constructor(private http: HttpClient) {
    console.log('El servicio de autenticación está corriendo');
    this.currentUserSubject = new BehaviorSubject<any>(
      JSON.parse(sessionStorage.getItem('currentUser') || '{}')
    );
  }

  IniciarSesion(credenciales: any): Observable<any> {
    return this.http.post(this.url, credenciales).pipe(
      map((data) => {
        sessionStorage.setItem('currentUser', JSON.stringify(data));
        this.currentUserSubject.next(data);
        return data;
      })
    );
  }

  CerrarSesion(): void {
    sessionStorage.removeItem('currentUser');
  }

  get UsuarioAutenticado() {
    return this.currentUserSubject.value;
  }

  isLoggin(): boolean {
    return this.currentUserSubject.value;
  }
}
