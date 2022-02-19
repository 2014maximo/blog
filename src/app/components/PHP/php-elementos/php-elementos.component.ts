import { Component, OnInit } from '@angular/core';
import { HeaderPostModel, CategoriaModel } from '../../../models/post.model';
import { repositorioContenidoImagenes } from '../../../constants/globales.constant';
import { copiarAlPortapapeles } from '../../../constants/funciones-globales';
import { ClipboardModel } from '../../../models/categorias.model';

@Component({
  selector: 'app-php-elementos',
  templateUrl: './php-elementos.component.html',
  styles: [
  ]
})
export class PhpElementosComponent implements OnInit {

  public cabeceraPost: HeaderPostModel = {
    rutaImagen: 'assets/img/categorias/php.png',
    alturaImagen: '100',
    fondo: true,
    tituloPost: 'CONCEPTOS BÁSICOS',
    sombra: 'drop'
  }

  public variables: ClipboardModel = {
    valorUno:'',
  }
  public constantes: ClipboardModel = {
    valorUno:''
  }

  public breadcrumb: CategoriaModel = {
    activo: true,
    categoria: 'PHP',
    colorText: 'tc-blue-five',
    ruta: 'php'
  }

  public rutaImagen: string = '';

  constructor() {
    this.inicializarVariables();
  }

  ngOnInit(): void {

  }

  private inicializarVariables() {
    this.rutaImagen = repositorioContenidoImagenes;

    this.variables = {
    valorUno: `<?php
    $var = 'Roberto';
    $Var = 'Juan';
    echo "$var, $Var";      // imprime "Roberto, Juan"
    
    $4site = 'aun no';      // inválido; comienza con un número
    $_4site = 'aun no';     // válido; comienza con un carácter de subrayado
    $täyte = 'mansikka';    // válido; 'ä' es ASCII (Extendido) 228
?>`,
    valorDos: `<?php
    $foo = 'Bob';                // Asigna el valor 'Bob' a $foo
    $bar = &$foo;                // Referenciar $foo vía $bar.
    $bar = "Mi nombre es $bar";  // Modifica $bar...
    echo $bar;
    echo $foo;                   // $foo también se modifica.
?>`,
    valorTres: `<?php
    $foo = 25;
    $bar = &$foo;      // Esta es una asignación válida.
    $bar = &(24 * 7);  // Inválida; referencia una expresión sin nombre.
    
    `+`function test()
    {
       return 25;
    }
    
    $bar = &test();    // Inválido.
?>`,
    valorCuatro: `<?php
    // Una variable -no definida Y -no referenciada (sin contexto de uso); imprime NULL
    var_dump($variable_indefinida);
    
    // Uso booleano; imprime 'false' (Vea operadores ternarios para más información sobre esta sintaxis)
    echo($booleano_indefinido ? 'true/n' : 'false/n');
    
    // Uso de una cadena; imprime 'string(3) "abc"'
    $cadena_indefinida .= 'abc';
    var_dump($cadena_indefinida);
    
    // Uso de un entero; imprime 'int(25)'
    $int_indefinido += 25; // 0 + 25 => 25
    var_dump($int_indefinido);
    
    // Uso de flotante/doble; imprime 'float(1.25)'
    $flotante_indefinido += 1.25;
    var_dump($flotante_indefinido);
    
    // Uso de array; imprime array(1) {  [3]=>  string(3) "def" }
    $array_indefinida[3] = "def"; // array() + array(3 => "def") => array(3 => "def")
    var_dump($array_indefinida);
    
    // Uso de objetos; crea un nuevo objeto stdClass (vea http://www.php.net/manual/en/reserved.classes.php)
    // Imprime: object(stdClass)#1 (1) {  ["foo"]=>  string(3) "bar" }
    $objeto_indefinido->foo = 'bar';
    var_dump($objeto_indefinido);
?>`
    }

    this.constantes = {
      valorUno: `<?php
    // Nombres de constantes correctos
    define("FOO",     "something");
    define("FOO2",    "something else");
    define("FOO_BAR", "something more");
    
    // Nombres de constantes incorrectos
    define("2FOO",    "something");
    
    // Esto es válido, pero debe evitarse:
    // PHP podría cualquier día proporcionar una constante mágica 
    // que rompiera el script
    define("__FOO__", "something"); 
      
?>`}
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

  public copiarAlPortapapeles(cadenaAlclipboard: string) {
    copiarAlPortapapeles(cadenaAlclipboard);
  }

}
