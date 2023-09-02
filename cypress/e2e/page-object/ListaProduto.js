export default class ListaProduto {
    constructor() {
        this.botaoListaProdutos,
        this.nomeProduto,
        this.botaoPesquisarProduto
    }

    get BotaoListaProdutos() {
        return cy.get('.shop-menu > .nav > :nth-child(2) > a');
    }

    get NomeProduto() {
        return cy.get('#search_product');
    }
    get BotaoPesquisarProduto() {
        return cy.get('#submit_search');
    }
}