import { Component, OnInit, Input } from '@angular/core';
import { datosCategoria, postActual, textoAFecha } from '../../constants/funciones/funciones-globales';
import { DatosPost } from '../../models/categorias.model';
import { TranslateService } from '@ngx-translate/core';

@Component({
	selector: 'app-encabezado-publicacion',
	templateUrl: './encabezado-publicacion.component.html',
	styleUrls: ['./encabezado-publicacion.component.css']
})
export class EncabezadoPublicacionComponent implements OnInit {

	@Input() idPublicacion: string = '';
	@Input() rutaIconoSugerido: string = '';

	public publicacion = new DatosPost();

	constructor(public translate: TranslateService) {
		translate.setDefaultLang(navigator.language.split('-')[0]);
	}

	ngOnInit(): void {
		this.inicializarVariables();
	}
	ngOnDestroy(): void {
	}

	public extraerDatoCategoria(categoria: string, referencia: number): any {
		return datosCategoria(categoria, referencia)
	}

	private inicializarVariables() {
		this.publicacion = (postActual(this.idPublicacion))[0];
	}

	public fechaAString(fecha: Date): string {
		return new Date(fecha).toISOString().slice(0, 10);
	}

	public textoAFecha(fecha: string): Date {
		return textoAFecha(fecha);
	}

}
