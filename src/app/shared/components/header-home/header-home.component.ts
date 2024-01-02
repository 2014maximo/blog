import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CategoriaModel } from '../../models/post.model';
import { FormControl, FormGroup } from '@angular/forms';
import { CATEGORIA } from '@constants/categorias/categoria.constant';
import { DatosPost } from '../../models/categorias.model';
import { Router } from '@angular/router';
import { busquedaGeneral } from '../../constants/funciones/funciones-globales';
import { TranslateService } from '@ngx-translate/core';
import { LenguajeModel } from '@shared/models/traslate.model';
import { TraduccionService } from '@app/services/traduccion.service';
import { firstValueFrom } from 'rxjs';

@Component({
	selector: 'app-header-home',
	templateUrl: './header-home.component.html',
	styleUrls: ['./header-home.component.css']
})
export class HeaderHomeComponent implements OnInit {

	public formBasic: FormGroup;
	public categorias = CATEGORIA;
	public todosLosPost: DatosPost[] = [];
	public todosLosPostTraducidos: DatosPost[] = [];
	public mostrarResultados: boolean = false;
	public encontrados: DatosPost[] = [];
	public lang = navigator.language;
	public lenguajes: string[] = ['es', 'en', 'fr'];
	public idiomaActual: string = '';
	@Output() recargarTraduccion: EventEmitter<any> = new EventEmitter();

	@Input() categoria: CategoriaModel = {
		activo: false,
		categoria: '',
		ruta: '',
		colorText: ''
	};

	constructor(private router: Router, public translate: TranslateService, private traduccion: TraduccionService) {

		if (localStorage.getItem("idioma")) {
			this.idiomaActual = localStorage.getItem('idioma') ?? '';
		}
		translate.setDefaultLang(navigator.language.split('-')[0]);
		translate.use(this.idiomaActual);
		this.cargarListaLenguajes(this.idiomaActual);
		this.traducirColeccion(this.idiomaActual);

		this.inicializarVariables();
		this.formBasic = new FormGroup({
			'busqueda': new FormControl('')
		})
	}

	ngOnInit(): void {
	}

	private inicializarVariables() {
/* 		this.categorias.forEach((e: any, i: number) => {
			e.post.forEach((element: any) => {
				this.todosLosPost.push(element);
			});
		});
		this.todosLosPost = Object.assign([], this.retirarPostsPrincipalCategoria(this.todosLosPost)); */
		this.todosLosPostTraducidos = this.traduccion.todosLosPostTraducidos;
		// this.traducirColeccion(this.idiomaActual);
	}

	public buscar(e: any) {
		let buscar = this.formBasic.value.busqueda;
		if (e.key && buscar) {

			this.mostrarResultados = true;
			this.encontrados = busquedaGeneral(this.todosLosPostTraducidos, 'referenciaBusqueda', buscar);
		} else {
			this.mostrarResultados = false;
		}
	}

	private retirarPostsPrincipalCategoria(grupo: DatosPost[]): DatosPost[] {
		return grupo.filter(element =>
			element.mostrarEnPostHome
		)
	}

	public desaparecerTablaBusqueda() {
		setTimeout(() => {
			this.mostrarResultados = false;
			this.formBasic.get('busqueda')?.setValue('');
		}, 2000)
	}

	public irAlPost(post: string) {
		this.router.navigateByUrl(post);
	}

	public procesoCambioLenguaje(a:string){
		localStorage.setItem("idioma", a);
		this.idiomaActual = a;
		this.traduccion.cambiarIdioma(a);
		this.cargarListaLenguajes(a);
		this.traducirColeccion(a);
	}

	cargarListaLenguajes(a:string){
		this.lenguajes = ['es', 'en', 'fr']; 

		let indice = this.lenguajes.indexOf(a);
		if (indice !== -1) {
			this.lenguajes = this.lenguajes.slice(0, indice).concat(this.lenguajes.slice(indice + 1));
		}
	}

	async traducirColeccion(idioma:string){
		for(let i=0; i<this.todosLosPost.length; i++){
			this.todosLosPostTraducidos.push({
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
			})
		}
	}

	async traducirReferencia(ref:string){
		let traduccion = await firstValueFrom(this.translate.get(ref));
		return traduccion;
	}

}
