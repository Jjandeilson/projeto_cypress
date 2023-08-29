import ListaProduto from "../page-object/ListaProduto";
import Login from "../page-object/login";

describe("Listagem de produtos", () => {
    beforeEach(() => cy.visit('https://automationexercise.com'));

    it("Pesquisar produto(s) existente", () => {
        let login = new Login();
        let listaProduto = new ListaProduto()

        login.BotaoLogin.click()

        login.LoginUsuario.type('skyheart00190@gmail.com', {delay: 0})
        login.PasswordUsuario.type('teste', {delay: 0})
        login.BotaoLoginUsuario.click()

        listaProduto.BotaoListaProdutos.click()

        listaProduto.NomeProduto.type('Polo', {delay: 0})
        listaProduto.BotaoPesquisarProduto.click()

        cy.get('.productinfo > img').should('be.visible')
    })
    
    it("Pesquisar produto(s) não existente", () => {
        let login = new Login();
        let listaProduto = new ListaProduto()

        login.BotaoLogin.click()

        login.LoginUsuario.type('skyheart00190@gmail.com', {delay: 0})
        login.PasswordUsuario.type('teste', {delay: 0})
        login.BotaoLoginUsuario.click()

        listaProduto.BotaoListaProdutos.click()

        listaProduto.NomeProduto.type('Blusa', {delay: 0})
        listaProduto.BotaoPesquisarProduto.click()

        cy.get('.productinfo > img').should('not.exist')

    })
})