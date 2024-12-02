# Introdução à User Story [API] Ingressos

**User Story: Reservando Ingressos na API**  
A API de Ingressos permite que usuários reservem ingressos para assistir a filmes em cinemas. As reservas incluem detalhes como filme, assento, preço e horário.

---

## Plano de Teste

### Objetivo

Garantir que a funcionalidade de reserva de ingressos opere conforme os requisitos funcionais e não funcionais estabelecidos.

### Escopo

1. Validar campos obrigatórios no endpoint `/tickets`.
2. Confirmar a lógica de validação para assentos e preços.
3. Verificar a criação bem-sucedida de uma reserva com ID único.
4. Avaliar o desempenho da API sob carga, garantindo cumprimento das metas de performance.

### Ferramentas

-   **Postman** para testes funcionais manuais.
-   **Newman** para execução de testes automatizados.
-   **JMeter** para testes de carga e performance.

### Requisitos de Teste

-   **Funcionais**: A API deve validar corretamente os campos obrigatórios e criar reservas válidas.
-   **Não Funcionais**: A API deve atender aos requisitos de desempenho sob cargas definidas.

---

## Cenários Macro na Suíte de Testes

1. **Criar uma Reserva Válida**:

    - Enviar uma solicitação POST com todos os campos preenchidos corretamente.
    - Confirmar resposta 201 Created com o ID único da reserva.

2. **Validar Campos Obrigatórios**:

    - Testar omissão de cada campo obrigatório para garantir respostas de erro apropriadas.

3. **Verificar Intervalo de Valores**:

    - Testar número de assento fora do intervalo de 0 a 99.
    - Testar preço do ingresso fora do intervalo de 0 a 60.

4. **Desempenho da API**:
    - Confirmar que a API processa pelo menos 50 solicitações por segundo.
    - Garantir tempo médio de resposta abaixo de 300 milissegundos.

---

## Testes Candidatos à Automação

1. **Teste de Criação de Reserva**:

    - Cenário positivo: reserva bem-sucedida.
    - Cenário negativo: omissão ou preenchimento incorreto de campos obrigatórios.

2. **Teste de Validação de Intervalos**:

    - Assento com número inválido.
    - Preço fora do intervalo permitido.

3. **Teste de Desempenho**:
    - Verificar a capacidade de processamento sob carga.

---

## Gherkin dos Testes Candidatos à Automação

### Criar uma Reserva Válida

```gherkin
Feature: Criar Reserva
  Scenario: Reserva criada com sucesso
    Given que o usuário está autenticado
    When ele envia uma solicitação POST para "/tickets" com detalhes válidos
    Then o sistema deve retornar status 201 Created
    And incluir o ID único da reserva
```

```gherkin
Feature: Validar Campos Obrigatórios
  Scenario: Omissão de campos obrigatórios
    Given que o usuário está autenticado
    When ele envia uma solicitação POST para "/tickets" com campos obrigatórios ausentes
    Then o sistema deve retornar status 400 Bad Request
    And incluir uma mensagem de erro apropriada
```

```gherkin
Feature: Verificar Intervalo de Valores
  Scenario: Número de assento inválido
    Given que o usuário está autenticado
    When ele envia uma solicitação POST para "/tickets" com seatNumber fora do intervalo de 0 a 99
    Then o sistema deve retornar status 400 Bad Request
```

```gherkin
  Scenario: Preço fora do intervalo permitido
    Given que o usuário está autenticado
    When ele envia uma solicitação POST para "/tickets" com price fora do intervalo de 0 a 60
    Then o sistema deve retornar status 400 Bad Request
```
