import { Component, OnInit } from '@angular/core';
import { HeaderPostModel, CategoriaModel } from '../../../models/post.model';
import { IndiceDeContenidosModel } from '../../../models/indice.model';
import { ContactFormService } from '../../../services/contact-form.service';

@Component({
  selector: 'app-gestion-formulario',
  templateUrl: './gestion-formulario.component.html',
  styleUrls: ['./gestion-formulario.component.css']
})
export class GestionFormularioComponent implements OnInit {

  public cabeceraPost: HeaderPostModel = {
    rutaImagen: '',
    alturaImagen: '',
    fondo: false,
    tituloPost: ''
  }
  public contenidoTabla:any;

  public claseEstadistica = '';

  public breadcrumb: CategoriaModel = {
    activo: true,
    categoria: 'ESTADISTICA',
    colorText: 'text-light',
    ruta: 'estadistica'
  }

  constructor(private gestionForm: ContactFormService) {
    this.inicializarVariables();
  }

  ngOnInit(): void {
  }

  private inicializarVariables() {
    this.cabeceraPost = {
      rutaImagen: '',
      fondo: true,
      tituloPost: 'GESTIÓN FORMULARIO',
      alturaImagen: '',
      sombra: 'drop'
    };

    this.claseEstadistica = 'mt-2';

    this.gestionForm.getForms('form-contact').then( response =>{
      response?.subscribe( data => {
        this.contenidoTabla = data.map( form => {
          let formulario:any = form.payload.doc.data();
          formulario['id'] = form.payload.doc.id;
          return formulario 
           
        });
        console.log(this.contenidoTabla, 'EL CONTENIDO TABLA');
      })
    });

/*     this.gestionForm.getQuicklyForms('form-contact').subscribe((forms) => {
      this.contenidoTabla = [];
      forms.forEach((data: any) => {
        this.contenidoTabla.push({
          id: data.payload.doc.id,
          data: data.payload.doc.data()
        })
      })
      console.log(this.contenidoTabla, 'EL CONTENIDO DE LA TABLA');
    }) */

  }

  eliminar(id: any){
    this.gestionForm.delete('form-contact', id);
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

}
