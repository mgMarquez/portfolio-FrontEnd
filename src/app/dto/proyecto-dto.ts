export class ProyectoDTO {
  id: number;
  titulo: string;
  descripcion: string;
  imgUrl: string;
  webUrl: string;

  constructor(
    id: number,
    titulo: string,
    descripcion: string,
    imgUrl: string,
    webUrl: string
  ) {
    this.id = id;
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.imgUrl = imgUrl;
    this.webUrl = webUrl;
  }
}
