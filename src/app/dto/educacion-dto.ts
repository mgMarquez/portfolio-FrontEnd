export class EducacionDTO {
  id: number;
  titulo: string;
  escuela: string;
  descripcion: string;
  imgUrl: string;
  webUrl: string;
  inicio: string;
  fin: string;

  constructor(
    id: number,
    titulo: string,
    escuela: string,
    descripcion: string,
    imgUrl: string,
    webUrl: string,
    inicio: string,
    fin: string
  ) {
    this.id = id;
    this.titulo = titulo;
    this.escuela = escuela;
    this.descripcion = descripcion;
    this.imgUrl = imgUrl;
    this.webUrl = webUrl;
    this.inicio = inicio;
    this.fin = fin;    
  }
}
