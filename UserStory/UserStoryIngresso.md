# User Story: Reservando Ingressos na API

## Descrição

**Sendo** um usuário da API de Ingressos,  
**Gostaria** de poder reservar ingressos para assistir a um filme em um cinema,  
**Para** garantir meu lugar no evento desejado.

---

## Definition of Ready (DoR)

-   Banco de dados configurado com informações de filmes, assentos e preços disponíveis;
-   Endpoints básicos da API implementados, incluindo rotas para consultar filmes e horários disponíveis;
-   Ambiente de testes configurado e acessível para validação funcional e de desempenho;
-   Documentação da API atualizada com as especificações da rota `/tickets`.

---

## Definition of Done (DoD)

-   Validação de todos os campos obrigatórios implementada na rota `/tickets`;
-   Validação dos limites:
    -   Assento (0-99);
    -   Preço (0-60);
-   Testes unitários cobrindo as validações e criação de reservas;
-   Testes de integração cobrindo fluxos de reserva de ingressos;
-   Garantia de que o sistema retorna:
    -   Status 201 Created;
    -   ID da reserva no corpo da resposta em casos de sucesso;
-   Evidências dos testes funcionais e de performance registradas;
-   Desempenho validado:
    -   Processamento de 50 requisições por segundo;
    -   Tempo de resposta inferior a 300ms.

---

## Acceptance Criteria

### Requisição POST para `/tickets`:

-   Falhas em caso de ausência de qualquer campo obrigatório:
    -   Status 400 Bad Request;
-   Reservas para números de assento fora do intervalo 0-99:
    -   Status 422 Unprocessable Entity;
-   Reservas para preços fora do intervalo 0-60:
    -   Status 422 Unprocessable Entity;
-   Reservas válidas devem:
    -   Gerar um registro no banco de dados;
    -   Incluir um ID único para a reserva;
    -   Retornar:
        -   Status 201 Created;
        -   ID único da reserva no corpo da resposta.

---

## Requisitos Adicionais:

-   Todas as solicitações deverão ser validadas para garantir integridade e segurança (exemplo: evitar SQL Injection);
-   Testes executados deverão incluir cenários de erro (ex.: campos inválidos, limites excedidos) e sucesso;
-   Evidências dos testes deverão estar anexadas ao relatório de validação.

## Requisitos Não Funcionais de Performance:

- A API deve ser capaz de processar pelo menos 50 solicitações de reserva de ingressos por segundo.
- O tempo médio de resposta para a reserva de um ingresso não deve exceder 300 milissegundos.
  
