# blog

FLUTTER:
- Porque se reescriben los métodos de la clase StatelessWidget.
- Explicar argumentos con nombre (que son, para que son y como se usa).
- Mostrar el uso del widget Text y la aplicación de cada una de las propiedades referenciadas en la documentacion.
- Explicar el Scaffold que es para que sirve como se usa y todas sus propiedades con ejemplos.
- Explicar interpolación de String pasar un numero a Texto.
- debugShowCheckedModeBanner: false RETIRAR MARCA DEBUG DE APLICACION INICIAL
- Listviews
- ListTiles
- Listas y map
- Rutas
- Json hacia mapas
- Future Builder
- Lectura de archivos JSON
- Iconos
- Imágenes
- Avatars
- Loadings
- InfiniteScroll
- Pull to refresh
- Cards
- Sliders
- Hotkeys: CTRL + . opciones sobre los widgets

CUANDO UN NPM NO PUEDE ENCONTRAR EL MODULO
npm install -D @types/module-name


PROYECTO QUE BUSCA AMPLIAR MIS CONOCIMIENTOS EN DESARROLLO Y SERVIR A LOS DEMAS CON EL RESULTADO

DEPENDENCIA GITHUB PAGES
npm i angular-cli-ghpages

---------------------------------------

INDICAMOS A GITHUB CUÁL SERÁ LA RUTA RAÍZ DE NUESTRA APLICACIÓN
ng build --prod --base-href="./"

SUBIR CAMBIOS A GITHUB (ANTERIOR, no funciona 2022)
npx angular-cli-ghpages – dir=dist

SUBIR CAMBIOS AL HOSTING FIREBASE
(PREVIO, UNA PRIMERA VEZ EN EL PC DE TRABAJO SE TIRA):
npm install -g firebase-tools

INSTALAR FIREBASE EN UBUNTU (LINUX)
curl -sL https://firebase.tools | bash

firebase login
LUEGO YA:

firebase deploy


SUBIR CAMBIOS A GITHUB(última versión)
ng build --prod --base-href https://2014maximo.github.io/blog/
npx angular-cli-ghpages --branch gh-pages

SUBIR CAMBIOS CON FIREBASE AL DOMINIO CONFIGURADO EN FIREBASE
ng build --prod --base-href="./"
firebase deploy



versión 1.0.0.3