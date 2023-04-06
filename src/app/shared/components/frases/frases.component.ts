import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FRASES } from 'src/app/constants/frases.constant';
import { FrasesModel } from 'src/app/models/web-service.model';
import { WebServicesService } from 'src/app/services/web-services.service';

@Component({
  selector: 'app-frases',
  templateUrl: './frases.component.html',
  styleUrls: ['./frases.component.css']
})
export class FrasesComponent implements OnInit {

  public frases: any;
  private ondestroy$: Subject<boolean> = new Subject();
  constructor(private webService: WebServicesService) { }

  ngOnInit(): void {
    this.inicializarVariables();
  }

  ngOnDestroy(): void {
    this.ondestroy$.next(true);
  }

  private inicializarVariables() {
    this.cargarFrases();
  }

  private cargarFrases(){
    this.webService.consultarFrases()
    .pipe(takeUntil(this.ondestroy$))
    .subscribe({
      next:(resp) => {
        this.procesarCargaFrases(resp);
      }
    })
  }

  private procesarCargaFrases(resp: FrasesModel[]){
    this.frases = resp;
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
}
