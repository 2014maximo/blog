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
`