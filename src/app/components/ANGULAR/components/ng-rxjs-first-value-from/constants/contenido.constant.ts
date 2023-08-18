export const CONTENIDO_1 = {
    caracteristicas: [
        '- Es una función asíncrona que devuelve una promesa.',
        '- Toma un Observable como argumento.',
        '- Devuelve una promesa que se resuelve con el primer valor emitido por el Observable o se rechaza con un error si el Observable no emite ningún valor.',
        '- Si el Observable emite varios valores, firstValueFrom() solo toma en cuenta el primer valor y luego completa el Observable.',
        '- Si el Observable emite un error antes de emitir un valor, la promesa se rechaza con el error emitido por el Observable.',
        '- Si se desea obtener el primer valor emitido por un Observable y no se requiere su posterior completitud, se puede utilizar la función take(1) en lugar de firstValueFrom().'
    ]
}

export const TEMPLATE_1 = `<div>
  <p>hola</p>
</div>
`;

export const TEMPLATE_2 = `<span class="c1">&lt;</span><span class="c2">div</span><span class="c1">&gt;</span>
  <span class="c1">&lt;</span><span class="c2">p</span><span class="c1">&gt;</span>
    hola
  <span class="c1">&lt;/</span><span class="c2">p</span><span class="c1">&gt;</span>
<span class="c1">&lt;/</span><span class="c2">div</span><span class="c1">&gt;</span>`