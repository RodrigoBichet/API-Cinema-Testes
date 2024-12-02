# User Story: Gerenciamento de Filmes na API

## Descrição

**Sendo** um usuário da API de Filmes,  
**Gostaria** de poder criar, atualizar, excluir, visualizar e consultar filmes,  
**Para** gerenciar eficientemente o catálogo de filmes.

---

## Definition of Ready (DoR)

-   Banco de dados e infraestrutura para desenvolvimento disponibilizados;
-   Endpoint para autenticação implementado (para validação do administrador);
-   Ambiente de testes configurado e acessível para validação funcional e de performance;
-   Documentação inicial da API no Swagger disponibilizada.

---

## Definition of Done (DoD)

-   Implementação das rotas: `/movies` (GET, POST) e `/movies/{id}` (GET, PUT, DELETE);
-   Validação de campos obrigatórios (ex.: título, ano de lançamento, gênero);
-   Implementação de verificações:
    -   Unicidade do título ao criar;
    -   Existência do ID ao atualizar ou excluir;
-   Respostas adequadas para cada cenário:
    -   201 Created;
    -   404 Not Found;
    -   200 OK;
    -   204 No Content;
-   Paginação implementada na listagem de filmes (máximo de 20 filmes por página);
-   Testes unitários e de integração implementados com cobertura mínima de 80%;
-   Automação de testes cobrindo cenários principais e alternativos;
-   Matriz de rastreabilidade atualizada;
-   Documentação atualizada no Swagger com exemplos de requisições e respostas;
-   Evidências de execução dos testes disponibilizadas no repositório.

---

## Acceptance Criteria

### Criando um Novo Filme:

-   O sistema deve validar a unicidade do título;
-   O sistema deve garantir que campos obrigatórios sejam preenchidos;
-   A resposta de sucesso deve retornar:
    -   Status 201 Created;
    -   O ID do filme no corpo da resposta;
-   Caso alguma validação falhe:
    -   Status 400 Bad Request;
    -   Detalhes do erro no corpo da resposta.

### Obtendo a Lista de Filmes:

-   O sistema deve retornar todos os filmes cadastrados com paginação;
-   Detalhes retornados:
    -   Título, ano de lançamento, gênero e ID;
-   O tempo de resposta não deve exceder 100ms para a listagem paginada.

### Obtendo Detalhes de um Filme por ID:

-   Se o ID for válido:
    -   Detalhes do filme;
    -   Status 200 OK;
-   Caso o ID não exista:
    -   Status 404 Not Found.

### Atualizando os Detalhes de um Filme por ID:

-   Permitir a atualização apenas de campos específicos (definidos no Swagger);
-   Caso o ID seja inválido ou inexistente:
    -   Status 404 Not Found;
-   Resposta de sucesso:
    -   Status 200 OK;
    -   Detalhes atualizados do filme.

### Excluindo um Filme por ID:

-   Verificar a existência do ID antes de realizar a exclusão;
-   Resposta de sucesso:
    -   Status 204 No Content;
-   Caso o ID não exista:
    -   Status 404 Not Found.

---

## Requisitos Não Funcionais:

-   A API deve atender às métricas de desempenho definidas nos requisitos;
-   Todos os testes implementados devem ter evidências claras no repositório.

## Requisitos Não Funcionais de Performance:

- A API deve ser capaz de processar pelo menos 100 solicitações de criação de filmes por segundo.
- O tempo médio de resposta para a criação de um novo filme não deve exceder 200 milissegundos.
- A API deve ser capaz de responder a solicitações GET de listagem de filmes em menos de 100 milissegundos.
- A lista de filmes deve ser paginada, com no máximo 20 filmes por página.
- A API deve ser capaz de responder a solicitações GET de detalhes de um filme em menos de 50 milissegundos.
- A API deve ser capaz de processar pelo menos 50 solicitações de atualização de filmes por segundo.
- O tempo médio de resposta para a atualização dos detalhes de um filme não deve exceder 300 milissegundos.
- A API deve ser capaz de processar pelo menos 30 solicitações de exclusão de filmes por segundo.
- O tempo médio de resposta para a exclusão de um filme não deve exceder 400 milissegundos.
---
