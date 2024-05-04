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
        code:'ng build --base-href "https://2014maximo.github.io/project-gh-pages/',
        textRuta:'User@DESKTOP-NR9Q26J MINGW64 ~/project-gh-pages> '
    }
]