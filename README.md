# blog


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
(PREVIO, UNA PRIMERA VEZ EN WINDOWS EL PC DE TRABAJO SE TIRA):
npm install -g firebase-tools
firebase login

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


versión 1.0.0.4