import { Injectable } from '@angular/core';
import { CATEGORIA } from '@constants/index';
import { TranslateService } from '@ngx-translate/core';
import { DatosPost } from '@shared/models/categorias.model';
import { Subject, firstValueFrom } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class TraduccionService {

	public categorias = CATEGORIA;
	public todosLosPost: DatosPost[] = [];
	public todosLosPostTraducidos: DatosPost[] = [];

	private cambioIdiomaSubject = new Subject<string>();
	public cambioIdioma$ = this.cambioIdiomaSubject.asObservable();

	constructor(private translate: TranslateService) {
		this.translate.get('ANGULAR.ng-instalacion.descripcionCorta').subscribe({
			next:(resp)=>{
				console.log(resp, 'TEST Translate');
			}
		});
		this.cargarPost();
	}

	public cambiarIdioma(idioma: string) {
		this.translate.use(idioma);
		this.cambioIdiomaSubject.next(idioma);
	}

	private cargarPost() {
		this.categorias.forEach((e: any, i: number) => {
			e.post.forEach((post: any) => {
				this.todosLosPost.push(post);
			});
			e.subcategorias.forEach((subcat: any) => {
				this.todosLosPost.push(subcat);
			});
		});
		//console.log(this.todosLosPost.length, 'CANTIDAD DE POST antes');
		this.todosLosPost = Object.assign([], this.retirarPostsPrincipalCategoria(this.todosLosPost));
		//console.log(this.todosLosPost.length, 'CANTIDAD DE POST DESPUES');
		this.traducirColeccion();
	}

	private retirarPostsPrincipalCategoria(grupo: DatosPost[]): DatosPost[] {
		return grupo.filter(element =>
			element.mostrarEnPostHome
		)
	}

	async traducirColeccion() {
		for (let i = 0; i < this.todosLosPost.length; i++) {
			let grupo = {
				categoria: this.todosLosPost[i].categoria,
				componente: this.todosLosPost[i].componente,
				descripcion: this.todosLosPost[i].descripcion,
				descripcionCorta: await this.traducirReferencia(this.todosLosPost[i].descripcionCorta),
				estado: this.todosLosPost[i].estado,
				estilos: this.todosLosPost[i].estilos,
				fechaActualizacion: this.todosLosPost[i].fechaActualizacion,
				fechaCreacion: this.todosLosPost[i].fechaCreacion,
				id: this.todosLosPost[i].id,
				imgCuadro: this.todosLosPost[i].imgCuadro,
				imgHorizontal: this.todosLosPost[i].imgHorizontal,
				imgVertical: this.todosLosPost[i].imgVertical,
				mostrarEnPostHome: this.todosLosPost[i].mostrarEnPostHome,
				nombre: await this.traducirReferencia(this.todosLosPost[i].nombre),
				posicion: this.todosLosPost[i].posicion,
				referenciaBusqueda: await this.traducirReferencia(this.todosLosPost[i].referenciaBusqueda),
				ruta: this.todosLosPost[i].ruta,
				imgSlider: this.todosLosPost[i].imgSlider
			}
			// console.log(grupo, 'EL QUE LE ESTA PASANDO');
			this.todosLosPostTraducidos.push(grupo)
		}

		return this.todosLosPostTraducidos
	}

	public async traducirReferencia(ref: string):Promise<string> {

		try{
			let traduccion = await firstValueFrom(this.translate.get(ref));
			return traduccion;
		}catch{
			return 'NO-TRASLATE'
		}
	}

}
