import { CodeModel } from "@shared/components/print-code/models/ts-instalacion.model";

export const NG_GH_PAGES: CodeModel []=[
    {
        mostrarRuta:true,
        code:'ng new proyect-githubpages',
        textRuta:'User@DESKTOP-NR9Q26J MINGW64 ~/project-gh-pages> '
    }
]
export const NG_GH_PAGES_AGREGAR_LIBERIA: CodeModel []=[
    {
        mostrarRuta:true,
        code:'ng add angular-cli-ghpages',
        textRuta:'User@DESKTOP-NR9Q26J MINGW64 ~/project-gh-pages> '
    }
]
export const NG_GH_PAGES_CONSTRUIR_PROYECTO: CodeModel []=[
    {
        mostrarRuta:true,
        code:'ng build --base-href "https://2014maximo.github.io/project-gh-pages/"',
        textRuta:'User@DESKTOP-NR9Q26J MINGW64 ~/project-gh-pages> '
    }
]

export const NG_GH_PAGES_SUBIR_COMPILADO: CodeModel []=[
    {
        mostrarRuta:true,
        code:'npx angular-cli-ghpages --dir=dist/project-gh-pages',
        textRuta:'User@DESKTOP-NR9Q26J MINGW64 ~/project-gh-pages> '
    }
]

export const NG_GH_PAGES_PRIMER_COMMIT: CodeModel []=[
    {
        mostrarRuta:true,
        code:'echo "# proyect-githubpages" >> README.md',
        textRuta:'User@DESKTOP-NR9Q26J MINGW64 ~/project-gh-pages> '
    },
    {
        mostrarRuta:false,
        code:'git init'
    },
    {
        mostrarRuta:false,
        code:'git add README.md'
    },
    {
        mostrarRuta:false,
        code:'git commit -m "first commit"'
    },
    {
        mostrarRuta:false,
        code:'git branch -M main'
    },
    {
        mostrarRuta:false,
        code:'git remote add origin https://github.com/2014maximo/proyect-githubpages.git'
    },
    {
        mostrarRuta:false,
        code:'git push -u origin main'
    },
]