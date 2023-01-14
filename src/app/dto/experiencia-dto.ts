export class ExperienciaDTO {
  id: number;
  posicion: string;
  compania: string;
  descripcion: string;
  imgUrl: string;
  webUrl: string;
  inicio: string;
  fin: string;

  constructor(
    id: number,
    posicion: string,
    compania: string,
    descripcion: string,
    imgUrl: string,
    webUrl: string,
    inicio: string,
    fin: string
  ) {
    this.id = id;
    this.posicion = posicion;
    this.compania = compania;
    this.descripcion = descripcion;
    this.imgUrl = imgUrl;
    this.webUrl = webUrl;
    this.inicio = inicio;
    this.fin = fin;
  }
  
}
