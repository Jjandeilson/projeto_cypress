import Login from "./page-object/Login";


describe("Cadastro de usuário", () => {
    beforeEach(() => cy.visit('https://automationexercise.com'));

    it("Realizar cadastro de usuário", () => {
        let login = new Login();
        
        login.BotaoLogin.click()
        
        login.NomeUsuario.type('skyheart', {delay: 0})
        login.EmailUsuario.type('skyheart00190@gmail.com', {delay: 0});
        login.BotaoSignup.click()
       
        login.SenhaUsuario.type('teste', {delay: 0})
        login.PrimeiroNome.type('Sky', {delay: 0})
        login.SegundoNome.type('heart', {delay: 0})
        login.Endereco.type('Endereço de teste', {delay: 0})
        login.Estado.type('Estado teste', {delay: 0})
        login.Cidade.type('Cidade teste', {delay: 0})
        login.Cep.type('00000-000', {delay: 0})
        login.Numero.type('00', {delay: 0})
        login.BotaoCriarUsuario.click()

        cy.get('b').should('be.visible');
    })

    it("Realizar login", () => {
        let login = new Login();

       login.BotaoLogin.click()

       login.LoginUsuario.type('skyheart00190@gmail.com', {delay: 0})
       login.PasswordUsuario.type('teste', {delay: 0})
       login.BotaoLoginUsuario.click()
    })
})