# Configuração do Ambiente

Para realizar as atividades, siga os passos abaixo para configurar corretamente o ambiente de testes.

### 1. Instalação do Postman

Siga a documentação oficial para instalar o Postman:

-   Documentação: [Introdução ao Postman](https://learning.postman.com/docs/introduction/overview/)
-   Download: [Postman Download](https://www.postman.com/downloads/)
-   Criar uma conta: Abra o Postman e crie uma conta ou faça login se já tiver uma.

### 2. Instalação do NodeJS

#### 2.1 Baixar e Instalar o NodeJS

1. Acesse o site oficial do NodeJS e faça o download da versão mais recente: [NodeJS Download](https://nodejs.org/en/download/)
2. Siga as instruções de instalação fornecidas pelo instalador.

#### 2.2 Executando a API Cinema Localmente

1. Após a instalação do NodeJS, abra o terminal (CMD, PowerShell, Terminal no Linux ou Mac).
2. Abra um terminal e vá para a pasta da API e execute o comando abaixo para iniciar a API:

    ```bash
    npm run start
    ```

3. A API estará disponível localmente na porta `http://localhost:3000/api/docs`. Direcione suas requisições para essa URL no Postman.

#### 2.3 Utilizando a Documentação Swagger

-   Acesse a documentação oficial da API para realizar as requisições e consultar os endpoints: [API Docs](http://localhost:3000/api/docs)

### 3. Criar a Primeira Collection no Postman

As coleções no Postman são grupos de requisições que podem ser organizados e reutilizados. Siga os passos abaixo para criar uma coleção:

1. **Criar nova coleção**:

    - No menu lateral esquerdo, clique no botão `+ New Collection`.
    - Dê um nome à coleção.
    - Opcionalmente, adicione uma descrição.

2. **Adicionar Requests**:

    - Dentro da coleção, clique em `Add Request` e configure o método (GET, POST, etc.), URL e parâmetros da requisição.

3. **Salvar a coleção**: Após adicionar todas as requisições, salve a coleção clicando em `Save`.

### Criação de Requests

Para criar uma requisição no Postman:

1. **Nova Requisição**:
    - Clique em `+ New Request` no topo da janela do Postman.
    - Escolha o método HTTP (GET, POST, PUT, DELETE).
    - Insira a URL da API.
2. **Parâmetros e Cabeçalhos**:

    - Configure os parâmetros na aba `Params`.
    - Adicione os cabeçalhos necessários na aba `Headers`.

3. **Body (Corpo da Requisição)**:

    - Se for um método como POST ou PUT, configure o corpo da requisição na aba `Body` (por exemplo, em formato JSON).

4. **Executar a Requisição**: Clique no botão `Send` para enviar a requisição e visualizar a resposta.

### Criação de Ambiente

Os ambientes são úteis para salvar variáveis reutilizáveis, como URLs e tokens de autenticação.

1. **Criar um Ambiente**:

    - No menu superior direito, clique em `Environments > Manage Environments`.
    - Clique em `Add` para criar um novo ambiente.
    - Defina um nome e adicione as variáveis, como `{{url_base}}` ou `{{token}}`.

2. **Usar o Ambiente**:
    - Ao enviar uma requisição, selecione o ambiente no menu suspenso de ambientes para que as variáveis sejam substituídas.

### Uso do PostBot

O PostBot é uma funcionalidade de IA que ajuda na criação de testes automáticos para requisições:

1. **Ativar o PostBot**:

    - Depois de enviar uma requisição, vá até a aba `Tests` e clique em `Ask PostBot`.
    - O PostBot sugerirá alguns scripts de teste para validar a resposta.

2. **Personalizar Testes**:
    - Você pode modificar ou adicionar seus próprios testes utilizando o Postman scripting com JavaScript.

### Monitoramento de Coleções

Para monitorar uma coleção de forma automática:

1. **Criar Monitor**:

    - Vá até a coleção desejada e clique em `Monitors > Create Monitor`.
    - Configure a frequência e o ambiente onde a coleção será executada.

2. **Verificar Resultados**:
    - O Postman enviará alertas via e-mail ou Slack com os resultados da execução automática.

### Mock de Coleções

Mocks permitem criar uma simulação da resposta da API para testar integrações:

1. **Criar Mock Server**:

    - Na aba `Mock Servers`, clique em `+ New Mock Server`.
    - Escolha uma coleção para simular e defina a resposta que será enviada.

2. **Usar o Mock**:
    - Quando o mock estiver ativo, você pode enviar requisições para o URL do mock gerado pelo Postman, sem depender do servidor real.

---

Essa documentação cobre o básico da instalação e configuração do Postman.
