export const mostrarSidebar = () => {
    const
        fundoEscuro = document.querySelector('.fundo-escuro'),
        sidebar = document.querySelector('.sidebar'),
        sair = sidebar.querySelector('.sair'),
        seta = sidebar.querySelector('.seta');

    sidebar.classList.add('sidebar-active');
    fundoEscuro.classList.add('fundo-escuro-active');

    sair.addEventListener('click', esconderSidebar);
    fundoEscuro.addEventListener('click', () => {
        sidebar.classList.remove('sidebar-active');
        fundoEscuro.classList.remove('fundo-escuro-active');
    });

    seta.addEventListener('click', mostrarSublista);
}

const esconderSidebar = (event) => {
    const 
        sair = event.target,
        sidebar = sair.parentElement,
        fundoEscuro = document.querySelector('.fundo-escuro');

    sidebar.classList.remove('sidebar-active');
    fundoEscuro.classList.remove('fundo-escuro-active');
}

const mostrarSublista = (event) => {
    const
        seta = event.target,
        listaItem = seta.parentElement.parentElement;
    
    listaItem.classList.toggle('lista-item-active');
    listaItem.addEventListener('mouseover', () => {
    })
}