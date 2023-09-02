export const REFERJAVASCRIPT = [
    {
        referencia: 'import',
        retorno: '<span class="c3"><b>import</b></span>'
    },
    {
        referencia: 'function',
        retorno:'<span class="c3">function</span>'
    }
]

export function cargarTypescript(plantilla:string):string{

    let formado: string = plantilla;
    REFERJAVASCRIPT.forEach((e:any, i:number)=>{
        console.log(formado);
        formado = plantilla.replaceAll(e.referencia, e.retorno);
        console.log(formado)
    });
    let contadorSaltos: number = 0;

    formado = '<pre class="fuenteTres fw-5 fs-17">'.concat(formado);
    formado = formado.concat('</pre>');
    return formado;
}

export function traerRefencia(actual:string): string{
    return REFERJAVASCRIPT.find( e => e.referencia === actual)?.retorno ?? actual;
}