import { Component, OnInit } from '@angular/core';
import { CATEGORIA } from '@constants/index';
import { postActual } from '@shared/constants';
import { cargarBreadcrumb, cargarIndice } from '@shared/constants/funciones/funciones-globales';
import { CategoriaModel } from '@shared/models';
import { CategoriaPostModel, DatosPost } from '@shared/models/categorias.model';
import { IndiceDeContenidosModel } from '@shared/models/indice.model';
import { AGENCIAS, BLOQUE_LINKS, MARKETING, PREGUNTAS } from './constants/dev-busqueda.constant';
import { PreguntasModel } from '@components/DEVELOPER/models/dev-busqueda.model';
import { IAgencia } from './models/empleo.model';
import { TranslateService } from '@ngx-translate/core';
import { TraduccionService } from '@app/services/traduccion.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
	selector: 'app-dev-busqueda-empleo',
	templateUrl: './dev-busqueda-empleo.component.html',
	styleUrls: ['./dev-busqueda-empleo.component.css']
})
export class DevBusquedaEmpleoComponent implements OnInit {

	public idPublicacion = '27df71a4-6654-4349-9481-06f93c3639d6';
	public indiceTypescript: IndiceDeContenidosModel[] = [];
	public publicacion = new DatosPost();
	public categoria = new CategoriaPostModel();
	public breadcrumb = new CategoriaModel();
	public marketing: string[] = [];
	public preguntas: PreguntasModel[] = [];
	public agencias: IAgencia[] = [];
	public bloqueLinks: IndiceDeContenidosModel[] = [];
	public textosATraducir: any;
	public cv:any = {};
	public marketplace:any = {};
	public preguntasComunes:any = {};
	public categoriaTranslate:any = {};
	public ondestroy$: Subject<boolean> = new Subject();

	constructor(public translate: TranslateService, private traduccion: TraduccionService) {
		// translate.setDefaultLang(navigator.language.split('-')[0]);
	}

	ngOnInit(): void {
		this.cargaCv();
		this.publicacion = postActual(this.idPublicacion)[0];
		this.categoria = CATEGORIA.filter(e => e.nombre === this.publicacion.categoria)[0];
		this.indiceTypescript = cargarIndice(this.publicacion);
		this.breadcrumb = cargarBreadcrumb(this.publicacion);
		this.agencias = AGENCIAS;
		this.marketing = MARKETING;
		this.preguntas = PREGUNTAS;
		this.bloqueLinks = BLOQUE_LINKS.sort((a: any, b: any) => a.nombre.toLowerCase().charCodeAt(0) - b.nombre.toLowerCase().charCodeAt(0));

		this.traduccion.cambioIdioma$.pipe(takeUntil(this.ondestroy$)).subscribe((idioma) => {
			this.cargaCv();
		})
	}

	ngOnDestroy() {
		this.ondestroy$.next(true);
	}

	public scroll(el: HTMLElement) {
		el.scrollIntoView();
	}

	public cargaCv(){
		this.translate.get('DEVELOPER.dev-busqueda-empleo').pipe(takeUntil(this.ondestroy$)).subscribe((translated: any) => {
			this.categoriaTranslate = translated;
			this.cv = translated.cv;
			this.marketplace = translated.marketplace.linkedin.puntos;
			this.preguntasComunes = translated.entrevista.preguntas;
		});
	}

	public idFormat(refer: string, id?: number): string {
		return id ? `${refer.toLowerCase()}+${id}` : `${refer.toLowerCase()}`;
	}

	public activo(e: any): string {
		return e.srcElement.ariaExpanded ? 'active' : '';
	}

	public retornarKeys(grupo: object):string[]{
		return Object.keys(grupo);
	}

}
