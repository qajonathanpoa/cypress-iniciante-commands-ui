///<reference types="cypress"/>
describe("Asserts", () => {

    it.only("Verificar se está visível", () => {
        cy.visit("/")
            .get(".header-logo")
        cy.get(".fa-user").click()

        cy.get(".account_form > h3")
            .should("be.visible")

        cy.get(".account_form > h3")
            .should("contain", "Login")
            .should("have.text", "Login")

        cy.get(".account_form > h3")
            .then((element) => {

                //Utiizando o expect para fazer as asserções após pegar o valor da variável com o then
                expect(element.text()).eq("Login")
                expect(element).to.be.visible

            })

    })

})