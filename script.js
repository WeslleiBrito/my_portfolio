/* ♻️ Este é um componente customizado que herda da classe HTMLElement, 
isso vai permitir que eu reaproveite esse elemento em todas as partes do meu projeto, sem 
precisar ficar recriando o conteudo em todas as páginas ♻️*/

class HeaderComponent extends HTMLElement {

    connectedCallback() {

        /*  essa variavel armazena nome do arquivo html, 
            peciso para poder estilizar os elementos da lista
        */
        const paginaAtual = window.location.pathname.split('/').pop().split('.')[0]
        const listaPath = window.location.pathname.split('/')
        alert(`>>> ${paginaAtual} <<<`)
       
        // 🖨️ definindo a lista de itens do menu 🖨️ 
        const menuItens = [
            {
                nome: "Sobre mim",
                href: "index"
            },
            {
                nome: "Formação",
                href: "formacao"
            },
            {
                nome: "Portfólio",
                href: "portfolio"
            },
            {
                nome: "Contato",
                href: "contato"
            }
        ]

        /* Para tornar a mudança do titulo da página dinamica inserir essa lógica que identifica a
           posição do nome do documento  
        */
        const index = menuItens.findIndex(item => item.href === paginaAtual)

        if(index){
            document.title = menuItens[index].nome
        }else{
            document.title = menuItens[0].nome
        }
        

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



class CardFormacao extends HTMLElement {
    
    connectedCallback() {

        const listaCursos = [
            {
                logo: "../img/icons8-javascript.svg",
                alt: "logo da tecnologia javascript",
                nome: "Web Full Stack",
                duracao: "1040 horas",
                ano: 2023,
                instituicao: "Labenu",
                status: true
            },
            {
                logo: "../img/icons8-python.svg",
                alt: "logo da tecnologia python",
                nome: "Aprenda a programar em Python com Orientação a Objetos",
                duracao: "100 horas",
                ano: 2021,
                instituicao: "Alura",
                status: true
            },
            {
                logo: "../img/uninter-logo.svg",
                alt: "logo da universidade uninter",
                nome: "Graduação: Tecnologia em análise e desenvolvimento de sistemas",
                duracao: "2,5 anos",
                ano: 2024,
                instituicao: "Uninter",
                status: false
            },
            {
                logo: "../img/java-icon.svg",
                alt: "logo da tecnologia java",
                nome: "Java completo: Programação Orientada a Objetos + Projetos",
                duracao: "54,5 horas",
                ano: 2022,
                instituicao: "Udemy",
                status: false
            },
        ].sort((a, b) => {
            if (a.ano > b.ano){
                return -1
            }

            if (a.ano < b.ano){
                return 1
            }

            return 0
        })

        const renderItensCursos = listaCursos.map(item => {
            return `
                <li class="item-curso">
                    <img class="logo-curso" src=${item.logo} alt=${item.alt}/>
                    <h3 class="nome-curso">${item.nome}</h3>
                    <section class="dados-complementares">
                        <h6 class="titulo-atributo">Duração: <span class="valor">${item.duracao}</span></h6>
                        <h6 class="titulo-atributo">Ano: <span class="valor">${item.ano}</span></h6>
                        <h6 class="titulo-atributo">Instituição: <span class="valor">${item.instituicao}</span></h6>
                        <h6 class="titulo-atributo">Status: <span class="valor">${item.status ? "Concluído" : "Em andamento"}</span></h6>
                    </section>
                </li>
            `
        }).join('')

        this.innerHTML = `
            <ul id="lista-formacao">
                ${renderItensCursos}
            </ul>
        `

    }
}

customElements.define('card-formacao-component', CardFormacao)