export default class FinalizarCompra {
    constructor() {
        this.botaoCarrinho,
        this.botaoCheckout,
        this.botaoFinalizarCheckout,
        this.nomeUsuarioCartao,
        this.numeroCartao,
        this.cvcCartao,
        this.mesCartao,
        this.anoCartao,
        this.bataoFinailizarCompra
    }

    get BotaoCarrinho() {
        return cy.get('.shop-menu > .nav > :nth-child(3) > a');
    }
    
    get BotaoCheckout() {
        return cy.get('.col-sm-6 > .btn');
    }

    get BotaoFinalizarCheckout() {
        return cy.get(':nth-child(7) > .btn');
    }

    get NomeUsuarioCartao() {
        return cy.get('[data-qa="name-on-card"]');
    }

    get NumeroCartao() {
        return cy.get('[data-qa="card-number"]');
    }

    get CvcCartao() {
        return cy.get('[data-qa="cvc"]');
    }

    get MesCartao() {
        return cy.get('[data-qa="expiry-month"]');
    }

    get AnoCartao() {
        return cy.get('[data-qa="expiry-year"]');
    }

    get BataoFinailizarCompra() {
        return cy.get('[data-qa="pay-button"]');
    }

}