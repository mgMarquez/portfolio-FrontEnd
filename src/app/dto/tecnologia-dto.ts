export class TecnologiaDTO {
  id: number;
  nombre: string;
  descripcion: string;
  imgUrl: string;
  progreso: number;

  constructor(
    id: number,
    nombre: string,
    descripcion: string,
    imgUrl: string,
    progreso: number
  ) {
    this.id = id;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.imgUrl = imgUrl;
    this.progreso = progreso;
  }
  
}
