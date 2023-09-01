export const referHTML = [
    {
        referencia: '<',
        retorno: '<span class="c1">&lt;</span>',
        claseColor:'c1'
    },
    {
        referencia: '</',
        retorno:'<span class="c1">&lt;/</span>',
        claseColor:'c1'
    },
    {
        referencia: '>',
        retorno: '<span class="c1">&gt;</span>',
        claseColor:'c1'
    },
    {
        referencia: 'abrirComponente',
        retorno:'<span class="c2">',
        claseColor: 'c2'
    },
    {
        referencia:'cerrarComponente',
        retorno:'</span>',
        claseColor: ''
    },
    {
        referencia:'abrirComponenteInterno',
        retorno: '<span class="c3">',
        claseColor: 'c3'
    },
    {
        referencia:'/',
        retorno:'<span class="c2">/</span>',
        claseColor:'c2'
    },
    {
        referencia: '=',
        retorno: '<span class="c1">=</span>',
        claseColor: 'c1'
    },
    {
        referencia: 'abrirTextoCadena',
        retorno: '<span class="c1">"',
        claseColor: 'c1'
    },
    {
        referencia: 'abrirTexto',
        retorno: '<span class="c4">',
        claseColor: 'c4'
    },
    {
        referencia: 'abrirCorcheteInterno',
        retorno: '<span class="c1">[</span>',
        claseColor: 'c1'
    },
    {
        referencia: ']',
        retorno: '<span class="c1">]</span>',
        claseColor:'c1'
    },
    {
        referencia: 'abrirParentesisInterno',
        retorno: '<span class="c1">(</span>',
        claseColor: 'c1'
    },
    {
        referencia: ')',
        retorno: '<span class="c1">)</span>',
        claseColor:'c1'
    }

]

/* export function menorQue(cadenaOriginal:string, i:number, actual:string, siguiente: string,):string{
    let textoListo:string ='';

    if(siguiente === '/'){
        textoListo =`${traerRefencia('</')}${traerRefencia('abrirComponente')}${this.extraerComponente(i+1, '>',0,0)}${traerRefencia('cerrarComponente')}`;
      }else{
        textoListo =
        `${traerRefencia('<')}${traerRefencia('abrirComponente')}${this.extraerComponente(i, '>',0,0)}${traerRefencia('cerrarComponente')}`;
      }
    return textoListo;
} */

export function traerRefencia(actual:string): string{
    return referHTML.find( e => e.referencia === actual)?.retorno ?? actual;
}
