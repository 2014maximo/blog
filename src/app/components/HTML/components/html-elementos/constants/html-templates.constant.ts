export const HTML_H1 = `
h1,h2,h3,h4,h5,h6{
    display: block;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
    unicode-bidi: isolate;
}

h1{
    font-size: 2em;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
}
h2{
    font-size: 1.5em;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
}
h3{
    font-size: 1.17em;
    margin-block-start: 1em;
    margin-block-end: 1em;
}
h4{
    font-size: 1.17em;
    margin-block-start: 1em;
    margin-block-end: 1em;
}
h5{
    font-size: 0.83em;
    margin-block-start: 1.67em;
    margin-block-end: 1.67em;
}
h6{
    font-size: 0.67em;
    margin-block-start: 2.33em;
    margin-block-end: 2.33em;
}
`;

export const HTML_head_style = `
head {
    display: none;
}`;

export const HTML = `
<!DOCTYPE html>`;

export const HTML_1 = `
<h1>Title</h1>`;

export const HTML_4 = `
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">`;

export const HTML_XHTML = `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">`;

export const HTML_html = `
<!-- <!DOCTYPE html> -->
<html lang="en">
<!-- <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body></body> -->
</html>`;

export const HTML_meta_charset = `
<meta charset="UTF-8">`;

export const HTML_meta_description = `
<meta name="description" content="Esta página trata sobre...">`;

export const HTML_meta_keywords = `
<meta name="keywords" content="palabra1, palabra2, palabra3">`;

export const HTML_meta_robots = `
<meta name="robots" content="index, follow">`;

export const HTML_meta_http = `
<meta http-equiv="cache-control" content="no-cache">`;

export const HTML_head_code = `
<head>
  <meta charset="utf-8">
  <title>Trucos pa' desarrollo</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="google-adsense-account" content="ca-pub-3588100301246050">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css">
  <!-- javascript -->
  <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
    integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
    crossorigin="anonymous"></script>
</head>`;

export const HTML_p = `
<p>Text</p>`;

export const HTML_p_style = `
p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    unicode-bidi: isolate;
}`;

export const HTML_p_br = `
<p>Lorem ipsum <br> sit amet consectetur adipisicing elit.</p>`;

export const HTML_p_pre = `
<pre>
Lorem ipsum
dolor sit amet
consectetur
adipisicing
elit.
</pre>`;

export const HTML_p_pre_ = `
<p>
Lorem ipsum
dolor sit amet
consectetur
adipisicing
elit.
</p>`;

export const HTML_p_mark = `
<p>
    Lorem ipsum dolor sit amet <mark>consectetur</mark> adipisicing elit.
</p>`;

export const HTML_p_strong = `
<p>
    Lorem ipsum dolor sit amet <b>consectetur</b> <strong>adipisicing</strong> elit.
</p>`

export const HTML_p_styles = `
b {
    font-weight: bold;
}
strong {
    font-weight: bold;
}`;

export const HTML_p_italic = `
<p>
    Lorem ipsum dolor sit amet <em>consectetur</em> <i>adipisicing</i> elit.
</p>`;


export const HTML_italic_style = `
i {
    font-style: italic;
}
em {
    font-style: italic;
}`;

export const HTML_underline_style = `
u {
    text-decoration: underline;
}`;

export const HTML_p_underline = `
<p>
    Lorem ipsum dolor sit amet <u>consectetur</u> adipisicing elit.
</p>`;

export const HTML_p_abbr = `
<p>
    I like to write <abbr title='Hypertext Markup Language'>HTML</abbr>!
</p>`;

export const HTML_abbr_style = `
abbr {
    text-decoration: underline dotted;
}`;

export const HTML_ins_style = `
ins {
    text-decoration: underline;
}`;

export const HTML_ins = `
<p>
    Lorem ipsum dolor sit amet <ins>consectetur</ins> adipisicing elit.
</p>
<p>
    Lorem ipsum dolor sit amet <ins datetime="2024-06-06T12:00:00Z">consectetur</ins> adipisicing elit.
</p>`;

export const HTML_p_del = `
<p>
    Lorem ipsum dolor sit amet <del>consectetur</del> adipisicing elit.
</p>`;

export const HTML_del_style = `
del {
    text-decoration: line-through;
    }`;

export const HTML_sub_style = `
sup {
    vertical-align: super;
    font-size: smaller;
}
    
sub {
    vertical-align: sub;
    font-size: smaller;
}`;

export const HTML_p_sub = `
<p>El agua tiene la fórmula química H<sub>2</sub>O.</p>
<p>Einstein propuso la famosa ecuación E = mc<sup>2</sup>.</p>
<p>El precio es de 10 m<sup>2</sup>.</p>`;

export const HTML_href = `
<!-- EXTERNO ABSOLUTA -->
<a href="http://example.com/" rel="external">example site</a>

<!-- RELATIVA INTERNA -->
<a href="/example">Text Here</a>

<!-- A UNA ANCLA -->
<a href="#Topic1">Click para saltar a una referencia id</a>

<!-- ENLASE QUE MARCA UN NÚMERO -->
<a href="tel:11234567890">Call me</a>

<!-- LINK EN UNA NUEVA PESTAÑA -->
<!-- Cuando utilice esta opción para páginas que 'no'
controle, añada 'rel=«noopener»' a su enlace para evitar que el objeto
window.opener se envíe con la solicitud.
 Actualmente, Firefox 'no' es compatible con noopener,
 por lo que tendrá que utilizar rel=«noopener noreferrer»
 para obtener el máximo efecto -->
 <a href="example.com" target="_blank">Text Here</a>
 
 <!-- Basta con utilizar el protocolo javascript:
para ejecutar el texto como JavaScript en lugar de abrirlo
como un enlace normal -->
<a href="javascript:myFunction();">Run Code</a>

<!-- También puede conseguir lo mismo utilizando el atributo onclick: -->
<a href="#" onclick="myFunction(); return false;">Run Code</a>

<!-- Además, puede incluir un signo de exclamación !
después del hashtag para evitar que la página se desplace a la parte superior. -->
<a href="#!" onclick="myFunction();">Run Code</a>

<!-- Si el valor del atributo href empieza por mailto:
intentará abrir un cliente de correo electrónico al hacer clic: -->
<a href="mailto:example@example.com">Send email</a>
<!-- Pondrá la dirección de correo electrónico
'example@example.com' como destinatario para el correo electrónico recién creado. -->

<!-- También puede añadir direcciones para destinatarios cc o bcc
utilizando la siguiente sintaxis: -->
<a href="mailto:example@example.com?cc=john@example.com&bcc=jane@example.com">Send email</a>

<!-- También puede rellenar el asunto y el cuerpo del nuevo correo electrónico: -->
<a href="mailto:example@example.com?subject=Example+subject&body=Message+text">Send email</a>
`
export const HTML_href_style = `
a:-webkit-any-link {
    color: -webkit-link;
    cursor: pointer;
    text-decoration: underline;
}`;

export const HTML_hreflang = `
<!-- Páginas en Diferentes Idiomas: -->
<link rel="alternate" href="https://example.com/es/" hreflang="es" />
<link rel="alternate" href="https://example.com/en/" hreflang="en" />
<link rel="alternate" href="https://example.com/fr/" hreflang="fr" />

<!-- Páginas en Diferentes Idiomas y Regiones: -->
<link rel="alternate" href="https://example.com/es-mx/" hreflang="es-MX" />
<link rel="alternate" href="https://example.com/es-es/" hreflang="es-ES" />
<link rel="alternate" href="https://example.com/en-us/" hreflang="en-US" />
<link rel="alternate" href="https://example.com/en-gb/" hreflang="en-GB" />

<!-- Página Predeterminada: -->
<link rel="alternate" href="https://example.com/" hreflang="x-default" />
`;

export const HTML_rel = `
<!-- Hoja de Estilo -->
<link rel="stylesheet" href="styles.css">

<!-- Icono de Sitio -->
<link rel="icon" href="favicon.ico" type="image/x-icon">

<!-- Indica una versión alternativa del documento en otro idioma o formato. -->
<link rel="alternate" href="https://example.com/alternate-page" hreflang="es">

<!-- Vincula un archivo de manifiesto para aplicaciones web progresivas. -->
<link rel="manifest" href="/manifest.json">

<!-- Indica a los motores de búsqueda que no deben seguir el enlace o pasar "link juice" para SEO.-->
<a href="https://example.com" rel="nofollow">Enlace</a>

<!-- Estas relaciones se usan para mejorar la seguridad al abrir enlaces en nuevas pestañas. noopener evita que la nueva página tenga acceso a la página que la abrió a través de window.opener, y noreferrer evita que la nueva página reciba información del referente. -->
<a href="https://example.com" target="_blank" rel="noopener noreferrer">Abrir en nueva pestaña</a>

<!-- Indica que el enlace apunta a la página del autor del documento.-->
<a href="https://example.com/autor" rel="author">Autor</a>

<!-- Indica que el enlace apunta a una licencia de derechos de autor. -->
<link rel="license" href="https://example.com/licencia">

<!-- Indican la relación de paginación.-->
<link rel="prev" href="https://example.com/page1">
<link rel="next" href="https://example.com/page3">`;

export const HTML_target = `
<!--  _blank  -->
<a href="https://example.com" target="_blank">Abrir en nueva pestaña</a>
<!-- Abre el enlace en una nueva pestaña o ventana del navegador. -->

<!--  _self  -->
<a href="https://example.com" target="_self">Abrir en la misma pestaña</a>
<!-- Abre el enlace en el mismo marco o ventana (comportamiento predeterminado si el atributo target no está especificado).-->

<!-- _parent -->
<a href="https://example.com" target="_parent">Abrir en el marco padre</a>

<!--  _top -->
<a href="https://example.com" target="_top">Abrir en el marco superior</a>
<!-- Abre el enlace en el marco superior, eliminando todos los marcos anidados. -->
`;

export const HTML_title = `
<!-- Proporciona una descripción adicional del enlace -->
<a href="https://example.com" title="Ir al sitio web de Example">Example</a>

<!-- Proporciona una descripción adicional de la imagen -->
<img src="imagen.jpg" alt="Descripción de la imagen" title="Imagen de un paisaje">

<!-- Añade información adicional sobre la acción del botón -->
<button title="Haz clic para enviar el formulario">Enviar</button>`;
