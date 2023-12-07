//Classe destinada a separar e facilitar o entendimento dos metodos utilizados, usando PageObject Pattern.

class HomePages {


    entrar() {
        cy.viewport(1536, 960) //Setar resolução uma vez que no padrão estava sendo exibida a versão mobile, onde não são exibidos os menus com dropdown
        cy.visit('https://www.vr.com.br')
    }

    verificarSeEstouNaHome() {
        //Verifica se estou na home baseado no banner principal
        cy.get('[data-id="Banner VR Multi"]').should('be.visible');
    }

    clicarOndeUsarMeuCartaoVr() {
        cy.get(':nth-child(3) > .vr-main-navigation__link').click()
        cy.get(':nth-child(3) > ul > li:nth-child(2)').click({ force: true });
    }
    paginaOndeAceita() {
        //verificar se foi feito o acesso no path /onde-aceita.htm
        cy.url().should('be.equal', 'https://www.vr.com.br/onde-aceita.htm')
    }
    verificarMapa() {
        cy.get('.main-section').should('be.visible')
    }
}
export default HomePages;