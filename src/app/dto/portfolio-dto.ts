import { PersonaDTO } from './persona-dto';

export class PortfolioDTO {
  persona!: PersonaDTO;

  constructor(persona: PersonaDTO) {
    this.persona = persona;
  }
  /*
    private List<EducacionDTO> educaciones;
    private List<ExperienciaDTO> experiencias;
    private List<ProyectoDTO> proyectos;
    private List<TecnologiaDTO> tecnologias;
    */
}
