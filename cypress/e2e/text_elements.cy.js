///<reference types="cypress"/>
//Describe eh a funcionalidade que iremos testar
describe("Get texts", () => {

//it eh o cenario
it("Obter texto dos elementos", () => {
    //get - Encontrar elementos
    cy.visit("/")
    .get(".header-logo")

    //o then(via jquery) serve para acessar o conteudo do elemento e enfim capturar o que ha necessario,
    //como o texto por exemplo
    cy.get(".top_header_left > p").then((element) =>{

        console.log(element.text())

    })

   

})

})