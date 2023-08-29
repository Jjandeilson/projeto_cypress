export default class Carrinho {
 constructor() {
    this.botaoProdutos,
    this.produto,
    this.botaoAdicionarProduto,
    this.botaoCarrinho,
    this.removerProduto
 }

 get BotaoProdutos() {
    return cy.get('.shop-menu > .nav > :nth-child(2) > a');
 }

 get Produto() {
    return cy.get(':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a');
 }

 get BotaoAdicionarProduto() {
    return cy.get(':nth-child(5) > .btn');
 }

 get BotaoCarrinho() {
    return cy.get('.shop-menu > .nav > :nth-child(3) > a');
 }

 get RemoverProduto() {
    return cy.get('.cart_quantity_delete > .fa');
 }

}