
///<reference types="cypress"/>
//Describe eh a funcionalidade que iremos testar
describe("Interacoes", () => {

    //it eh o cenario
    it("Digitar em um campo", () => {
        //get - Encontrar elementos
        cy.visit("/")
            .get(".header-logo")

        cy.get(".form-control").type("qajonathanpoa@gmail.com")

    })

    it("Click", () => {
        //get - Encontrar elementos
        cy.visit("/")
            .get(".header-logo")

        //click normal   
        cy.get(".fa-user").click()

        //double click
        // cy.get(".fa-user").dblclick()

        // //right click
        // cy.get(".fa-user").rightclick()


    })

    it("Select", () => {
        //get - Selecionar elementos
        cy.visit("/")
            .get(".header-logo")

cy.get(".footer_one_widget").contains("Checkout View Two").click()
cy.get("#country").select("Colombia")
})

it.only("Checkbox e radiobutton", () => {
    
    cy.visit("/")
        .get(".header-logo")

cy.get(".footer_one_widget").contains("Checkout View One").click()
cy.get("#materialUnchecked")
.check()
.uncheck()
})
    
   

})