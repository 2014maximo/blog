import { Component, OnInit, Input } from '@angular/core';
import { datosCategoria, postActual, textoAFecha } from '../../constants/funciones/funciones-globales';
import { DatosPost } from '../../models/categorias.model';
import { TranslateService } from '@ngx-translate/core';
// import { firstValueFrom } from 'rxjs';

@Component({
	selector: 'app-encabezado-publicacion',
	templateUrl: './encabezado-publicacion.component.html',
	styleUrls: ['./encabezado-publicacion.component.css']
})
export class EncabezadoPublicacionComponent implements OnInit {

	@Input() idPublicacion: string = '';
	@Input() rutaIconoSugerido: string = '';

	public publicacion = new DatosPost();
	public titulo:string = '';
	public descripcion:string[]=[];

	constructor(public translate: TranslateService) {
		translate.setDefaultLang(navigator.language.split('-')[0]);
	}

	async ngOnInit() {
		this.inicializarVariables();
		this.contenidoEncabezado();
		if(this.publicacion){
			this.publicacion.descripcion.forEach(e => 
				this.descripcion.push(e)
			)}
	}

	ngOnDestroy(): void {
	}

	contenidoEncabezado(){
		this.translate.get(this.publicacion.nombre).subscribe((translated: any) => {
			this.titulo = translated
		});
		let cantTxts = this.publicacion.descripcion.length;
		this.publicacion.descripcion[0].split('.');
	}

/* 	async cargarDescripcion(e:string): Promise<string>{
		try{
			return await firstValueFrom(observable);
				

		} catch(e) {
			console.error(e);
		}
	} */

	public extraerDatoCategoria(categoria: string, referencia: number): any {
		return datosCategoria(categoria, referencia)
	}

	private inicializarVariables() {
		this.publicacion = (postActual(this.idPublicacion))[0];
		console.log(this.publicacion);
	}

	public fechaAString(fecha: Date): string {
		return new Date(fecha).toISOString().slice(0, 10);
	}

	public textoAFecha(fecha: string): Date {
		return textoAFecha(fecha);
	}

}
