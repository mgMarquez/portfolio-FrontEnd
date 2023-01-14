import { PersonaDTO } from './persona-dto';
import { ExperienciaDTO } from './experiencia-dto';
import { EducacionDTO } from './educacion-dto';
import { ProyectoDTO } from './proyecto-dto';
import { TecnologiaDTO } from './tecnologia-dto';

export class PortfolioDTO {
  persona: PersonaDTO;
  educaciones: EducacionDTO[];
  experiencias: ExperienciaDTO[];
  proyectos: ProyectoDTO[];
  tecnologias: TecnologiaDTO[];

  constructor(
    persona: PersonaDTO,
    experiencias: ExperienciaDTO[],
    educaciones: EducacionDTO[],
    proyectos: ProyectoDTO[],
    tecnologias: TecnologiaDTO[]
  ) {
    this.persona = persona;
    this.experiencias = experiencias;
    this.educaciones = educaciones;
    this.proyectos = proyectos;
    this.tecnologias = tecnologias;
  }
}
