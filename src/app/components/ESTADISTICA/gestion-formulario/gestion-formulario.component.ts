import { Component, OnDestroy, OnInit } from '@angular/core';
import { HeaderPostModel, CategoriaModel } from '../../../shared/models/post.model';
import { IndiceDeContenidosModel } from '../../../shared/models/indice.model';
import { ContactFormService } from '../../../services/contact-form.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-gestion-formulario',
  templateUrl: './gestion-formulario.component.html',
  styleUrls: ['./gestion-formulario.component.css']
})
export class GestionFormularioComponent implements OnInit, OnDestroy {

  public cabeceraPost: HeaderPostModel = {
    rutaImagen: '',
    alturaImagen: '',
    fondo: false,
    tituloPost: ''
  }
  public contenidoTabla:any;
  public ondestroy$: Subject<boolean> = new Subject();

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

  ngOnDestroy() {
    this.ondestroy$.next(true);
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
      
      if(response){

      
      response.pipe(takeUntil(this.ondestroy$)).subscribe( data => {

        this.contenidoTabla = data.map( form => {
          let formulario:any = form.payload.doc.data();
          formulario['id'] = form.payload.doc.id;
          return formulario 
           
        });

      });
    }
    });

/*     this.gestionForm.getQuicklyForms('form-contact').subscribe((forms) => {
      this.contenidoTabla = [];
      forms.forEach((data: any) => {
        this.contenidoTabla.push({
          id: data.payload.doc.id,
          data: data.payload.doc.data()
        })
      })

    }) */

  }

  eliminar(id: any){
    this.gestionForm.delete('form-contact', id);
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

}
