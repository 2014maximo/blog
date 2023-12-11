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

@Component({
	selector: 'app-header-home',
	templateUrl: './header-home.component.html',
	styleUrls: ['./header-home.component.css']
})
export class HeaderHomeComponent implements OnInit {

	public formBasic: FormGroup;
	public categorias = CATEGORIA;
	public todosLosPost: DatosPost[] = [];
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
		this.cargarListaLenguajes();

		this.inicializarVariables();
		this.formBasic = new FormGroup({
			'busqueda': new FormControl('')
		})
	}

	ngOnInit(): void {
		this.cambiarLenguaje(navigator.language.split('-')[0]) // = this.lenguajes.filter(e => e !== navigator.language.split('-')[0])
	}

	private inicializarVariables() {
		this.categorias.forEach((e: any, i: number) => {
			e.post.forEach((element: any) => {
				this.todosLosPost.push(element);
			});
		});
		this.todosLosPost = Object.assign([], this.retirarPostsPrincipalCategoria(this.todosLosPost))

	}

	public buscar(e: any) {
		let buscar = this.formBasic.value.busqueda;
		if (e.key && buscar) {
			this.mostrarResultados = true;
			this.encontrados = busquedaGeneral(this.todosLosPost, 'nombre', buscar);
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
		this.cambiarLenguaje(a);
		this.cargarListaLenguajes();
	}

	public cambiarLenguaje(lang: string) {
		this.translate.use(lang); // Cambia el idioma que se le mande
		// let idiomaActual = navigator.language.split('-')[0];
		this.traduccion.cambiarIdioma(lang);
	}

	cargarListaLenguajes(){
		this.lenguajes = ['es', 'en', 'fr']; 
		this.idiomaActual = navigator.language.split('-')[0];

		let indice = this.lenguajes.indexOf(this.idiomaActual);
		if (indice !== -1) {
			this.lenguajes = this.lenguajes.slice(0, indice).concat(this.lenguajes.slice(indice + 1));
		}

		console.log(this.lenguajes, this.idiomaActual, 'CONTROL');

	}

}
