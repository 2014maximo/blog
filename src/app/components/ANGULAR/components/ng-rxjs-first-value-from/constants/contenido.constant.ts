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

export const TEMPLATE_1 = `
import { firstValueFrom } from 'rxjs';

async function obtenerPrimerValor() {
  const observable = of(1, 2, 3); // Observable que emite 1, 2, 3
  const primerValor = await firstValueFrom(observable);
  console.log('Primer valor:', primerValor);
}

obtenerPrimerValor();`;

export const TEMPLATE_2 = `
import { firstValueFrom } from 'rxjs';

async function realizarAccionDespuesDelPrimerValor() {
  const observable = interval(1000); // Observable que emite valores cada segundo
  const primerValor = await firstValueFrom(observable);
  console.log('Se emitió el primer valor después de 1 segundo.');
  // Realizar alguna acción después de recibir el primer valor
}

realizarAccionDespuesDelPrimerValor();`;

export const TEMPLATE_3 = `
import { firstValueFrom } from 'rxjs';

async function manejarErrorSiNoSeEmiteValor() {
  const observable = empty(); // Observable vacío
  try {
    const primerValor = await firstValueFrom(observable);
    console.log('Primer valor:', primerValor);
  } catch (error) {
    console.error('No se emitió ningún valor antes de que el observable se completara.');
  }
}

manejarErrorSiNoSeEmiteValor();`;

export const TEMPLATE_4 = `
import { firstValueFrom } from 'rxjs';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';

async function obtenerPrimerValorTransformado() {
  const observable = interval(1000).pipe(
    map(valor => valor * 2) // Duplicar cada valor emitido
  );

  const primerValor = await firstValueFrom(observable);
  console.log('Primer valor duplicado:', primerValor);
}

obtenerPrimerValorTransformado();`;

export const TEMPLATE_5 = `
import { Component, OnInit } from '@angular/core';
import { MiServicio } from './mi-servicio.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-mi-componente',
  templateUrl: './mi-componente.component.html',
})
export class MiComponente implements OnInit {
  constructor(private miServicio: MiServicio) {}

  async ngOnInit() {
    const observable = this.miServicio.obtenerDatosAsync(); // Supongamos que esto devuelve un observable

    try {
      const primerValor = await firstValueFrom(observable);
      console.log('Primer valor del servicio:', primerValor);
    } catch (error) {
      console.error('No se pudo obtener el primer valor del servicio.');
    }
  }
}`;