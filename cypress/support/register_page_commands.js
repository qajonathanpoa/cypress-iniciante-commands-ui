//Importante ao criar uma nova página command é importar a página no arquivo e2e.js


//Elementos
const botaoCadastrar = "#btnRegister"

const elements = {
    butons:{
        register: "#btnRegister"

    },
    fields:{
        name: "#user",
        email:"#email",
        password:"#password"


    },
    messages:{

        messageErrorFields: ".errorLabel",
        modalSuccess: ".swal2-title",
        subtitleSuccess: ".swal2-html-container"


    }
}

Cypress.Commands.add("saveRegister", () =>{
    cy.get(elements.butons.register).click()
})
//Recebendo por parâmetro o valor do campo email
//para digitar - Recebo o valor pela variavel email
//e digito no campo 
Cypress.Commands.add("fillEmail", (email) =>{
    cy.get(elements.fields.email).should("be.visible")
    .type(email)
})

Cypress.Commands.add("fillName", (name) =>{
    cy.get(elements.fields.name).type(name)
})

Cypress.Commands.add("fillPassword", (password) =>{
    cy.get(elements.fields.password).type(password)
})

Cypress.Commands.add("checkMessage", (message) =>{
    cy.get(elements.messages.messageErrorFields).should("have.text",message)
})

Cypress.Commands.add("checkMessageSuccess", (message) =>{
    //Abaixo passando um timeout por parâmetro no atributo do elemento, outra forma de passar um timeout 
    //fora o timeout global que podemos inserir no parâmetro
    cy.get(elements.messages.modalSuccess,{timeout: 3000}).should("contain", message)
    cy.get(elements.messages.subtitleSuccess).should("be.visible")


})