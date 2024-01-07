import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Subject, firstValueFrom } from 'rxjs';
import { WebServicesService } from 'src/app/services/web-services.service';
import { FRASES } from './constants/frases.constant';
import { TranslateService } from '@ngx-translate/core';
import { FrasesModel } from '@shared/models/web-service.model';

@Component({
  selector: 'app-frases',
  templateUrl: './frases.component.html',
  styleUrls: ['./frases.component.css']
})
export class FrasesComponent implements OnInit {

  public frases: FrasesModel[]=[];
  private ondestroy$: Subject<boolean> = new Subject();
  constructor(private webService: WebServicesService, private translate: TranslateService) { }

  ngOnInit(): void {
    this.inicializarVariables();
  }

  ngOnDestroy(): void {
    this.ondestroy$.next(true);
  }

  private inicializarVariables() {
    this.procesarCargarFrases();
  }

/*   private cargarFrases(){
    this.webService.consultarFrases()
    .pipe(takeUntil(this.ondestroy$))
    .subscribe({
      next:(resp) => {
        this.procesarCargaFrases(resp);
      }
    })
  } */

  async procesarCargarFrases(){
    // this.frases = resp;
    for(let i=0; i < FRASES.length; i++){
      let frase = {
        frase: await this.traducirReferencia(FRASES[i].frase),
        autor: await this.traducirReferencia(FRASES[i].autor),
        borde: FRASES[i].borde,
        colorText: FRASES[i].colorText,
        id: FRASES[i].id
      }
      this.frases.push(frase);
    }
    this.frases.sort((a,b) => { return Math.random() - 0.5})
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    autoplay: true,
    autoplaySpeed: 2800,
    autoplayTimeout: 20000,
    nav: true
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
