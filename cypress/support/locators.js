const locators = {
    LOGIN: {
        CAMPO_EMAIL: '#email',
        CAMPO_SENHA: 'input[name="password"]',
        BOTAO_ENTRAR: 'button[type="submit"]',
        LOGIN_FORM: 'form[class="form"]',
        OPCAO_CADASTRE_SE: 'a[type="button"]'
    },
    CADASTRO: {
        CAMPO_NOME: 'input[data-testid="nome"]',
        CAMPO_EMAIL: 'input[data-testid="email"]',
        CAMPO_SENHA: 'input[data-testid="password"]',
        OPCAO_ADMIN: 'input[data-testid="checkbox"]',
        BOTAO_CADASTRAR: 'button[data-testid="cadastrar"]',
        OPCAO_ENTRAR: 'a[data-testid="entrar"]'
    },
    HOME: {
        TEXTO_BEM_VINDO: 'h1',
        TEXTO_SISTEMA_ADMINISTRAR_ECOMMERCE: '.lead'
    }
}

export default locators