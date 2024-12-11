/* ♻️ Este é um componente customizado que herda da classe HTMLElement, 
isso vai permitir que eu reaproveite esse elemento em todas as partes do meu projeto, sem 
precisar ficar recriando o conteudo em todas as páginas ♻️*/

/*  essa variavel armazena nome do arquivo html, 
            peciso para poder estilizar os elementos da lista
        */
let paginaAtual = window.location.pathname.split('/').pop().split('.')[0]

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

if(index >= 0){
    document.title = menuItens[index].nome
}else{
    document.title = menuItens[0].nome
    paginaAtual = menuItens[0].href
}

class HeaderComponent extends HTMLElement {

    connectedCallback() {

        // ⚙️ Gerando os itens da lista separadamente ⚙️

        const renderListaMenu = menuItens.map(
            (item) => {
                return  `
                <li id="item-opcao${paginaAtual === item.href ? '-active' : ''}">
                    <a href="${item.href}.html">${item.nome}</a>
                </li>
            `
            }
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


class CardPortfolio extends HTMLElement {

    connectedCallback () {
        const portfolioItens = [
            {
                logo: "../img/logo-portfolios/logo-lab-escola.png",
                alt: "logo da lab escola",
                nome: "LabEscola",
                descricao: "Vamos começar nossa jornada no desenvolvimento web criando um sistema de escola de programação,\
                porque aqui gostamos de metalinguagem!",
                ano: 2022,
                tecnologias: [
                    "HTML",
                    "CSS",
                    "Javascript"
                ],
                link: "https://slimy-dinner.surge.sh/index.html"
            },
            {
                logo: '../img/logo-portfolios/astronauta.png',
                alt: "logo de um astronauta",
                nome: "Space Run",
                descricao: "Esse é o projeto de introdução aos fundamentos do React. Aqui, vamos praticar\
                a estrutura do que consideramos a estrutura do React. O objetivo é que funcione como o front-end de um E-Commerce",
                ano: 2023,
                tecnologias: [
                    "React",
                    "Styled-components"
                ],
                link: "https://run-space-wes.surge.sh/"
            },
            {
                logo: '../img/logo-portfolios/logo_pokemon.svg',
                alt: "logo com o nome pokémon",
                nome: "Poke API",
                descricao: "O Projeto React e APIs é um site de pokémons que possui três páginas: Home, Pokedex e Detalhes. \
                O projeto está subdivido em temas de acordo com os conteúdos que estudado durante o Módulo 2 - Frontend. \
                Este projeto terá como fonte de dados para a sua criação a Poke Api, uma Api pública, muito usada para \
                aplicações focadas em aprendizado de programação e também usada em cases de processos seletivos.",
                ano: 2023,
                tecnologias: [
                    "React",
                    "React Router",
                    "Styled-components",
                    "React Context",
                    "Axios"
                ],
                link: "https://pokedex-wesllei.surge.sh/"
            },
        
        ]

        const itens = portfolioItens.map((item) => {
            return `
                <li class="item-portfolio">
                    <img class="logo-projeto" src="${item.logo}" alt="${item.alt}"/>
                    <section class="conteudo">
                        <h6 class="nome">${item.nome}</h6>
                        <h6 class="titulo">Descrição</h6>
                        <p class="descricao">${item.descricao}</p>
                        <h6 class="titulo">Tecnologias utilizadas</h6>
                        <ul class="lista-tecnologia">
                            ${item.tecnologias.map((tecnologia) => {
                                return `
                                    <li class="item-tecnologia">
                                        <img src="../img/check.png" alt=check"/>
                                        <p>${tecnologia}</p>
                                    </li>
                                `
                            }).join('')}
                        </ul>
                         <a class="acessar" href=${item.link} target="_blank">
                            <h3>Acessar</h3>
                            <img src="../img/double-arrow.png" alt="seta dupla apontando para direita"/>
                         </a>
                    </section>
                </li>
            `
        }).join('')

        this.innerHTML = `
            <ul id="lista-portfolio">
                ${itens}
            </ul>
        `

    }
}

customElements.define('card-portfolio', CardPortfolio)