export const CONTENIDO_1 = {
    caracteristicas: [
        'Es una función asíncrona que devuelve una promesa.',
        'Toma un Observable como argumento.',
        'Devuelve una promesa que se resuelve con el primer valor emitido por el Observable o se rechaza con un error si el Observable no emite ningún valor.',
        'Si el Observable emite varios valores, firstValueFrom() solo toma en cuenta el primer valor y luego completa el Observable.',
        'Si el Observable emite un error antes de emitir un valor, la promesa se rechaza con el error emitido por el Observable.',
        'Si se desea obtener el primer valor emitido por un Observable y no se requiere su posterior completitud, se puede utilizar la función take(1) en lugar de firstValueFrom().'
    ]
}

export const TEMPLATE_1 = `<ng-template (click)="abrirLink(urlStackBlitz)" [rutaIconoSugerido]="'assets/img/icons/RXJS.png'">
  <p>{{ publicacion.nombre }}</p>
</ng-template>
`;

export const TEMPLATE_2 = `<span class="c1">&lt;</span><span class="c2">div</span><span class="c1">&gt;</span>
  <span class="c1">&lt;</span><span class="c2">p</span><span class="c1">&gt;</span>
    hola
  <span class="c1">&lt;/</span><span class="c2">p</span><span class="c1">&gt;</span>
<span class="c1">&lt;/</span><span class="c2">div</span><span class="c1">&gt;</span>`;

export const TEMPLATE_3 = `<div class="row">
<div class="col-1"></div>
<div class="col-md-10">
    <div class="row">
        <div class="col-md-7">
            <img src="https://plantillas_dev.gitlab.io/assets/img/items/pervertido-white.png" alt="" height="50" width="auto" class="drop">
            <h2 class="m-0 p-0 f-shadow-into-l fw-3 fs-30 text-secondary m-0 p-0 text-uppercase">CARACTERISTICAS</h2>
            <ul class="m-0 p-0 list-unstyled">
                <li class="m-0 p-0" *ngFor="let contenido of contenidos.caracteristicas">
                    <p class="text-light f-open-sans-c fs-18 lh-20 p-0">
                        {{ contenido }}
                    </p>
                </li>
            </ul>
        </div>
        <div class="col-md-5"></div>
    </div>
    <div class="espaciado"></div>

    <div class="row">
        <div class="col-md-7">
            <h2 class="m-0 p-0 f-shadow-into-l fw-3 fs-30 text-secondary m-0 p-0 text-uppercase">EJEMPLOS</h2>
            <app-print-code [code]="template" [tipo]="1"></app-print-code>
        </div>
    </div>
</div>
<div class="col-1"></div>

</div>
`;

export const TEMPLATE_4 = `
import { interval, firstValueFrom } from 'rxjs';
 
async function execute() {
  const source$ = interval(2000);
  const firstNumber = await firstValueFrom(source$);
  console.log('The first number is \$\{ firstNumber }');
}
 
execute();
 
// Expected output:
// 'The first number is 0'`