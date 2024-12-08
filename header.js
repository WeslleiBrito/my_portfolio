
/* ♻️ Este é um componente customizado que herda da classe HTMLElement, 
isso vai permitir que eu reaproveite esse elemento em todas as partes do meu projeto, sem 
precisar ficar recriando o conteudo em todas as páginas ♻️*/

class HeaderComponent extends HTMLElement {

    connectedCallback() {

        /*  essa variavel armazena nome do arquivo html, 
            peciso para poder estilizar os elementos da lista
        */
        const paginaAtual = window.location.pathname.split('/').pop()
        
        // 🖨️ definindo a lista de itens do menu 🖨️ 
        const menuItens = [
            {
                nome: "Sobre mim",
                href: "index.html"
            },
            {
                nome: "Formação",
                href: "formacao.html"
            },
            {
                nome: "Portfólio",
                href: "portfolio.html"
            },
            {
                nome: "Contato",
                href: "contato.html"
            }
        ]

        /* Para tornar a mudança do titulo da página dinamica inserir essa lógica que identifica a
           posição do nome do documento  
        */
        document.title = menuItens[menuItens.findIndex(item => item.href === paginaAtual)].nome

        // ⚙️ Gerando os itens da lista separadamente ⚙️

        const renderListaMenu = menuItens.map(
            item => `
                <li id="item-opcao${paginaAtual === item.href ? '-active' : ''}">
                    <a href="${item.href}">${item.nome}</a>
                </li>
            `
        ).join('')

        // 👇 utilizando uma das propriedades do HTMLElement 👇
        this.innerHTML = `
            <header>
                <div id="container-foto-perfil">
                    <img src="" alt="foto do perfil" id="foto-perfil">
                </div>
                <nav id="menu-opcoes">
                    <ul id="lista-opcoes">
                        ${renderListaMenu}
                    </ul>
                </nav>
            </header>
            <hr id="linha">
        `
    }
}


customElements.define('header-component', HeaderComponent)
