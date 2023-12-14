//Criado o commands que poderia ser utilizado para substituir o padrão page objects. 
//Onde podemos criar um command para cada página e chamar o metódo criado no teste.
Cypress.Commands.add("acessarPaginaRegistro", () =>{
    //ACESSANDO A TELA DE CADASTRO DE USUARIO E SE CERTIFICANDO QUE ESTOU NA TELA PELA CLASSE header-logo
    cy.visit("/")
    cy.get(".header-logo")

    //clicar no cadastro
    cy.get(".fa-lock").click()
})