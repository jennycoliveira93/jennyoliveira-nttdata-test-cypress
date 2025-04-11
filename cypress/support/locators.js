const locators = {
    LOGIN: {
        CAMPO_EMAIL: 'input[data-testid="email"]',
        CAMPO_SENHA: 'input[data-testid="senha"]',
        BOTAO_ENTRAR: 'a[data-testid="entrar"]',
        LOGIN_FORM: 'form[class="form"]',
        OPCAO_CADASTRE_SE: 'a[data-testid="cadastrar"]'
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