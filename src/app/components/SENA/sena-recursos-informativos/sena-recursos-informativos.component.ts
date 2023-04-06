import { Component, OnInit } from '@angular/core';
import { CategoriaModel } from '../../../shared/models/post.model';

@Component({
  selector: 'app-sena-recursos-informativos',
  templateUrl: './sena-recursos-informativos.component.html',
  styles: [
  ]
})
export class SenaRecursosInformativosComponent implements OnInit {

  public breadcrumb: CategoriaModel = {
    activo: true,
    categoria: 'NET',
    colorText: 'tc-violet-one',
    ruta: 'net'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
