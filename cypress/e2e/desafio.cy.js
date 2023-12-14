///<reference types="cypress"/>
import { faker } from '@faker-js/faker';

const user_data = require("../fixtures/desafio.json")
const randomName = faker.person.fullName();
const randomEmail = faker.internet.email();
const password = faker.internet.password();
const screens = require ("../fixtures/viewports.json") 

screens.forEach(element => {
   
   describe("Cadastro de usuario", () => {
   
      beforeEach("Acessando a página de cadastro", () => {
         cy.acessarPaginaRegistro()
         if (element != "desktop") {
           
            cy.viewport(element.screens)
         }
      })
   
      // const user_name = "Marizinho"
      // const user_password = "857988"
      // const user_email = "marinho@ig.com.br"
      //Importando a massa de dados do arquivo json do fixtures
      it("Validar campo senha vazio", () => {
   
   
         cy.fillName(randomName)
         cy.fillEmail(randomEmail)
         cy.saveRegister()
         cy.checkMessage("O campo senha deve ter pelo menos 6 dígitos")
   
   
      })
      it.only("Validar campo e-mail invalido", () => {
   
         cy.fillName(randomName)
         cy.fillEmail(user_data.email)
         cy.fillPassword(password)
         cy.saveRegister()
         cy.checkMessage("O campo e-mail deve ser prenchido corretamente")
   
   
   
      })
   
      it("Validar cadastro com sucesso", () => {
   
         cy.fillName(randomName)
         cy.fillEmail(randomEmail)
         cy.fillPassword(password)
         cy.saveRegister()
         cy.checkMessageSuccess("Cadastro realizado!")
   
   
      })
      it("Validar campo e-mail vazio", () => {
   
   
         cy.fillName(randomName)
         cy.fillPassword(password)
         cy.saveRegister()
         cy.checkMessage("O campo e-mail deve ser prenchido corretamente")
   
   
      })
      it("Validar campo nome e-mail e senha vazios", () => {
         cy.saveRegister()
         cy.checkMessage("O campo nome deve ser prenchido")
      })
   
   })    
});

