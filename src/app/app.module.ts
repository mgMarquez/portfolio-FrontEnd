import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EncabezadoComponent } from './components/encabezado/encabezado.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { AptitudesComponent } from './components/aptitudes/aptitudes.component';
import { LogrosComponent } from './components/logros/logros.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MenuNavegacionComponent } from './components/menu-navegacion/menu-navegacion.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { AppRoutingModule } from './app-routing.module';
import { PortfolioService } from './services/portfolio.service';
import { InterceptorService } from './services/interceptor.service';
import { ExperienciaService } from './services/experiencia.service';
import { EducacionService } from './services/educacion.service';
import { TecnologiaService } from './services/tecnologia.service';
import { ProyectoService } from './services/proyecto.service';
import { ExperienciaModalComponent } from './components/experiencia/experiencia-modal/experiencia-modal.component';
import { EducacionModalComponent } from './components/educacion/educacion-modal/educacion-modal.component';
import { AptitudesModalComponent } from './components/aptitudes/aptitudes-modal/aptitudes-modal.component';
import { LogrosModalComponent } from './components/logros/logros-modal/logros-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    EducacionComponent,
    AptitudesComponent,
    LogrosComponent,
    MenuNavegacionComponent,
    LoginComponent,
    PortfolioComponent,
    ExperienciaModalComponent,
    EducacionModalComponent,
    AptitudesModalComponent,
    LogrosModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    PortfolioService,
    ExperienciaService,
    EducacionService,
    TecnologiaService,
    ProyectoService,
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
