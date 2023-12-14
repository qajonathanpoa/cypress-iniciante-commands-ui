///<reference types="cypress"/>
//Describe eh a funcionalidade que iremos testar
describe("Get elementos", () => {

//it eh o cenario
it("Encontrar elementos", () => {
    //get - Encontrar elementos
    cy.visit("/")
    .get(".header-logo")

    //contains - Para encontrar elementos por texto onde geralmente diminuímos o escopo por GET
    cy.get("#top_header").as("cabecalho")
    cy.contains("Login")

    //find() - Para encontrar elemento e podemos diminuir o escopo com o get
    cy.get("@cabecalho").find(".fa-user")

    //as - alias - Serve para criar apelidos (atalhos) para grandes comandos

})

})