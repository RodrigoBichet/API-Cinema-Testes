# Introdução à User Story [API] Filmes

**User Story: Gerenciamento de Filmes na API**  
A API de Filmes permite que usuários realizem operações de CRUD (criação, leitura, atualização e exclusão) relacionadas aos filmes. Usuários comuns podem consultar filmes, enquanto usuários administradores têm permissões adicionais para gerenciar os dados.

---

## Plano de Teste

### Objetivo

Validar a funcionalidade e o desempenho da API de Filmes com base nos requisitos funcionais e não funcionais descritos.

### Escopo

1. Criar um novo filme.
2. Obter a lista de filmes.
3. Consultar detalhes de um filme por ID.
4. Atualizar os detalhes de um filme.
5. Excluir um filme.

### Ferramentas

-   **Postman** para execução de testes manuais.
-   **Newman/Jest** para automação de testes.
-   **JMeter** para testes de performance.

### Requisitos de Teste

-   **Funcionais**: Operações de CRUD devem atender aos requisitos definidos.
-   **Não Funcionais**: A API deve atingir métricas de desempenho estabelecidas.

---

## Cenários Macro na Suíte de Testes

1. **Criar um Novo Filme**:

    - Validação de campos obrigatórios e unicidade do título.
    - Verificação da resposta 201 Created com o ID único.

2. **Obter Lista de Filmes**:

    - Validação da lista paginada de filmes.
    - Testar o limite de 20 filmes por página.

3. **Obter Detalhes de um Filme por ID**:

    - Validar a existência de um filme por ID.
    - Testar resposta 404 Not Found para IDs inexistentes.

4. **Atualizar os Detalhes de um Filme**:

    - Verificar campos atualizáveis e suas validações.
    - Confirmar a resposta 200 OK com os detalhes atualizados.

5. **Excluir um Filme por ID**:
    - Testar exclusão de filmes existentes.
    - Confirmar resposta 204 No Content.

---

## Testes Candidatos à Automação

1. **Teste de Criação de Filme**:

    - Cenário positivo: criação bem-sucedida.
    - Cenário negativo: título duplicado ou campos obrigatórios ausentes.

2. **Teste de Obtenção de Lista de Filmes**:

    - Validação de paginação e resposta dentro do tempo esperado.

3. **Teste de Obtenção de Detalhes de Filme**:

    - Consultar filme existente.
    - Consultar filme inexistente.

4. **Teste de Atualização de Filme**:

    - Atualização bem-sucedida.
    - Atualização com dados inválidos.

5. **Teste de Exclusão de Filme**:
    - Exclusão de filme existente.
    - Tentativa de excluir filme já removido.

---

## Gherkin dos Testes Candidatos à Automação

### Criar um Novo Filme

```gherkin
Feature: Criar Filme
  Scenario: Criar filme com sucesso
    Given que o administrador está autenticado
    When ele envia uma solicitação POST para "/movies" com os detalhes do filme
    Then o sistema deve retornar status 201 Created
    And incluir o ID único do filme criado

  Scenario: Falha na criação devido a título duplicado
    Given que o administrador está autenticado
    When ele envia uma solicitação POST para "/movies" com um título já existente
    Then o sistema deve retornar status 400 Bad Request
    And incluir uma mensagem de erro apropriada
```

```gherkin
Feature: Obter Lista de Filmes
  Scenario: Obter filmes com sucesso
    Given que o usuário está autenticado
    When ele envia uma solicitação GET para "/movies"
    Then o sistema deve retornar status 200 OK
    And a lista deve conter no máximo 20 filmes por página
```

```gherkin
Feature: Excluir Filme
  Scenario: Excluir filme existente
    Given que o administrador está autenticado
    When ele envia uma solicitação DELETE para "/movies/{id}"
    Then o sistema deve retornar status 204 No Content

  Scenario: Excluir filme inexistente
    Given que o administrador está autenticado
    When ele envia uma solicitação DELETE para "/movies/{id}" com um ID inválido
    Then o sistema deve retornar status 404 Not Found
```
