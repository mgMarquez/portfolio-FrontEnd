import { PersonaDTO } from './persona-dto';
import { ExperienciaDTO } from './experiencia-dto';
import { EducacionDTO } from './educacion-dto';
import { ProyectoDTO } from './proyecto-dto';
import { TecnologiaDTO } from './tecnologia-dto';

export class PortfolioDTO {
  persona: PersonaDTO = new PersonaDTO();
  educaciones: EducacionDTO[] = [];
  experiencias: ExperienciaDTO[] = [];
  proyectos: ProyectoDTO[] = [];
  tecnologias: TecnologiaDTO[] = [];
}
