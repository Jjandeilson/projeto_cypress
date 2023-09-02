export default class Login {

    constructor() {
        this.loginUsuario,
        this.passwordUsuario,
        this.nomeUsuario,
        this.emailUsuario,
        this.botaoSignup,
        this.senhaUsuario,
        this.primeiroNome,
        this.segundoNome,
        this.endereco,
        this.estado,
        this.cidade,
        this.cep,
        this.numero,
        this.botaoCriarUsuario,
        this.botaoLogin,
        this.botaoLoginUsuario
    }

    get LoginUsuario() {
        return cy.get('[data-qa="login-email"]');
    }

     get PasswordUsuario() {
        return cy.get('[data-qa="login-password"]');
     }

    get NomeUsuario() {
        return cy.get('[data-qa="signup-name"]');
    }

    get EmailUsuario() {
        return cy.get('[data-qa="signup-email"]');
    }

    get BotaoSignup() {
        return cy.get('[data-qa="signup-button"]');
    }
    
    get SenhaUsuario() {
        return cy.get('[data-qa="password"]');
    }
    
    get PrimeiroNome() {
        return cy.get('[data-qa="first_name"]');
    }

    get SegundoNome() {
        return cy.get('[data-qa="last_name"]');
    }

    get Endereco() {
        return cy.get('[data-qa="address"]');
    }

    get Estado() {
        return cy.get('[data-qa="state"]');
    }

    get Cidade() {
        return cy.get('form > :nth-child(18)');
    }

    get Cep() {
        return cy.get('[data-qa="zipcode"]');
    }
    
    get Numero() {
        return cy.get('[data-qa="mobile_number"]');
    }

    get BotaoCriarUsuario() {
        return cy.get('[data-qa="create-account"]');
    }

    get BotaoLogin() {
        return cy.get('.shop-menu > .nav > :nth-child(4) > a');
    }

    get BotaoLoginUsuario() {
        return cy.get('[data-qa="login-button"]');
    }

}
