
describe("Teste da API do  Ecommerce", () => {

    it("Lista de produtos", () => {
        cy.request('https://automationexercise.com/api/productsList')
            .should((response) => {
                const {status, statusText} = response
                expect(status).to.equal(200)
                expect(statusText).to.equal('OK')
            })
    })
    
    it("Lista de marcas", () => {
        cy.request('https://automationexercise.com/api/brandsList')
            .should((response) => {
                const {status, statusText} = response
                expect(status).to.equal(200)
                expect(statusText).to.equal('OK')
            })
    })
})