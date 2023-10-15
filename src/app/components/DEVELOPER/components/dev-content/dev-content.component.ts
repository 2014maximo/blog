import { Component, OnInit } from '@angular/core';
import { postActual } from '@shared/constants';
import { DatosPost } from '@shared/models/categorias.model';

@Component({
  selector: 'app-dev-content',
  templateUrl: './dev-content.component.html',
  styleUrls: ['./dev-content.component.css']
})
export class DevContentComponent implements OnInit {

  public publicacion = new DatosPost();
  public idPost = '441cab09-256e-446f-bb2c-f017dd6d217b';

  constructor() {}

  ngOnInit(): void {
    this.inicializarVariables();
  }

  private inicializarVariables(){
    this.publicacion = postActual(this.idPost)[0];
  }

}
