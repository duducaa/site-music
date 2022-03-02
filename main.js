import { mostrarSidebar } from "./componentes/sidebar.js";
import { mostrarUsuarioOpcoes } from "./componentes/usuario-opcoes.js";

const 
    body = document.body,
    menu = document.querySelector('.menu'),
    modoEscuro = document.querySelector('.modo-escuro'),
    usuario = document.querySelector('.usuario'),
    buscar = document.querySelector('.buscar');

let modo = localStorage.getItem("modo");
if(modo && modo === "escuro") {
    body.classList.add('escuro');
    modoEscuro.classList.replace('bxs-moon', 'bxs-sun');
}

menu.addEventListener('click', mostrarSidebar);

modoEscuro.addEventListener('click', () => {
    body.classList.toggle('escuro');

    if (modoEscuro.classList.contains('bxs-moon')) {
        modoEscuro.classList.replace('bxs-moon', 'bxs-sun');
    } else {
        modoEscuro.classList.replace('bxs-sun', 'bxs-moon');
    }

    if (!body.classList.contains('escuro')) {
        localStorage.setItem("modo", "normal");
    } else {
        localStorage.setItem("modo", "escuro");
    }
});

usuario.addEventListener('click', mostrarUsuarioOpcoes);

buscar.addEventListener('click', (event) => {
    const buscarCampo = event.target.parentElement;
    buscarCampo.classList.toggle('buscar-campo-active');
});