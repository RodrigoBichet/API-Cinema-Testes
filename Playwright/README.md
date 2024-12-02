# Documentação para Configuração do Ambiente do Playwright

## Requisitos

-   **VS Code**: Tenha o Visual Studio Code (VS Code) instalado para facilitar o desenvolvimento e execução dos testes.
-   **Node.js**: Instale o Node.js em sua máquina, pois ele é necessário para executar o Playwright.

## Passos para Configurar o Playwright

1. **Instalar o Playwright**:

    - Abra o terminal do VS Code e execute o comando abaixo para iniciar a instalação do Playwright:
        ```bash
        npm init playwright@latest
        ```
    - **Configurações durante a instalação**:
        - Escolha a linguagem JavaScript usando a seta para baixo e pressione **Enter**.
        - Pressione **Enter** para confirmar as configurações padrão.
        - Quando questionado, responda **n** (não) nas duas últimas perguntas.

2. **Configurar o Arquivo `playwright.config.js`**:

    - Dentro do arquivo `playwright.config.js`, faça as configurações iniciais conforme o exemplo abaixo:

        ```javascript
        use: {
            /* URL base para usar em ações como `await page.goto('/')`. */
            baseURL: 'http://localhost:3000',

            /* Coletar rastreamento ao tentar novamente um teste que falhou. Veja https://playwright.dev/docs/trace-viewer */
            trace: 'on-first-retry',
        },
        ```

3. **Executar a API**:

    - No terminal, entre na pasta da API e inicie o server com o comando:
        ```bash
        npm run start
        ```

4. **Rodar os Testes com Playwright**:
    - Para iniciar a interface gráfica de testes do Playwright, execute o comando:
        ```bash
        npx playwright test --ui
        ```

---

## **Instalar o Allure**:

-   Usaremos o Node.js para instalar o Allure, seguindo [esta documentação](https://allurereport.org/docs/install-for-nodejs/). Abra o terminal e execute este comando:
    ```bash
      npm install -g allure-commandline
    ```
-   Execute este comando para ver se ele informa a versão mais recente:

    ```bash
      allure --version
    ```

    **Rodar o allure com Playwright**:

-   Abra o terminal do VS Code e execute o comando abaixo para iniciar a instalação do Playwright:
    ```bash
      npm install -D allure-playwright
    ```
-   Adicione allure-playwright nas configurações do Playwright:

    ```javascript
    import { defineConfig } from "@playwright/test";

    export default defineConfig({
        reporter: "allure-playwright",
    });
    ```

-   Comando para rodar os teste com o relatorio com allure

    ```bash
      npx playwright test --reporter=line,allure-playwright
    ```

-   Comando para gerar o relatorio com allure

    ```bash
      allure generate ./allure-results -o ./allure-report --clean
    ```

-   Comando para abrir o relatorio com allure
    ```bash
      allure open ./allure-report
    ```
