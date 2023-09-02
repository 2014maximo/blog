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

export function formateoHtml(){
    let textoListo = {base:'',formateo:''};

/*     if(siguiente === '/'){
        textoListo =`${traerRefencia('</')}${traerRefencia('abrirComponente')}${this.extraerComponente(i+1, '>',0,0)}${traerRefencia('cerrarComponente')}`;
      }else{
        textoListo =
        `${traerRefencia('<')}${traerRefencia('abrirComponente')}${this.extraerComponente(i, '>',0,0)}${traerRefencia('cerrarComponente')}`;
      } */
    return textoListo;
}

export function traerRefencia(actual:string): string{
    return referHTML.find( e => e.referencia === actual)?.retorno ?? actual;
}

/* export function extraerComponente():string{
    let puntoCorte=0;
    for(let j=posicion; j < this.code.length; j++){
      let actual = this.code[j];
      console.log(this.code[j])
      if(this.code[j] === refer){
        puntoCorte = j;
        break
      }
    }


    let extraido = this.code.substring(posicion,puntoCorte);

    if(extraido.indexOf(" ") !== -1) {
      extraido = `${extraido.split(' ')[0]}` ; // si tiene un espacio: 
    }else if(extraido.indexOf("/") !== -1){
      extraido = extraido.split('/')[1]
    } 

    let longitud = extraido[0] === '<'? extraido.slice(1) : extraido;

    let posicionSegun = refer==='='? posicion : posicion+1;

    this.code = this.devolverSinComponente(posicionSegun+posicionRecomendada, longitud.length+corteRecomendado);

    return extraido[0] === '<'? extraido.slice(1) : extraido;
} */