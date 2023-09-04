export const REFERJAVASCRIPT = [
    {
        referencia: 'import',
        retorno: '<span class="c3"><b>import</b></span>'
    },
    {
        referencia: 'function',
        retorno:'<span class="c3">function</span>'
    },
    {
        referencia: '{',
        retorno: '<span class="text-light">{</span>'
    },
    {
        referencia: '}',
        retorno: '<span class="text-light">}</span>'
    }
]

export function cargarTypescript(plantilla:string):string{

    // La idea es iterar cada referencia
    // Extraer todo lo que debe traer hasta su final propio
    // Se ubica la p
    // Reemplazarlo por los estilos propuestos
    // 

    let formado: string = plantilla;
    
    for(let i = 0; i < REFERJAVASCRIPT.length; i++){
        let ubicar = REFERJAVASCRIPT[i].referencia;
        let posicion = plantilla.indexOf(ubicar);
        console.log(posicion);
        // formado = formado.replace(REFERJAVASCRIPT[i].referencia, traerRefencia(REFERJAVASCRIPT[i].referencia));
    }

    let contadorSaltos: number = 0;

    formado = '<pre class="fuenteTres fw-5 fs-17">'.concat(formado);
    formado = formado.concat('</pre>');
    return formado;
}

export function traerRefencia(actual:string): string{
    return REFERJAVASCRIPT.find( e => e.referencia === actual)?.retorno ?? actual;
}

export function devolverUbicacion(cadena: string, referencia: string):number{
    
/*     for (let i = 0; i < cadena.length; i++){
        if(cadena[i] === )
    } */


    return 0;
}

class caminar {
    
}