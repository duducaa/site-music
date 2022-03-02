export const mostrarUsuarioOpcoes = (event) => {
    const 
        usuario = event.target,
        usuarioOpcoes = usuario.nextElementSibling;
    
    usuarioOpcoes.classList.toggle('usuario-opcoes-active');
}