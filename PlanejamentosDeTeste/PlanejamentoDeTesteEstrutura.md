# Introdução à User Story [API] {Nome da API}

**User Story:** {Descrição da User Story}

---

## Plano de Teste

### Objetivo

{Descrição do objetivo geral do teste.}

### Escopo

1. {Listar as principais funcionalidades a serem testadas.}

### Ferramentas

-   {Ferramenta 1}
-   {Ferramenta 2}

### Requisitos de Teste

-   **Funcionais**: {Requisitos funcionais principais.}
-   **Não Funcionais**: {Requisitos não funcionais principais.}

---

## Cenários Macro na Suíte de Testes

1. **{Nome do Cenário}**:
    - {Descrição do cenário e principais validações.}

{Repetir para outros cenários.}

---

## Testes Candidatos à Automação

1. **Teste de {Descrição do Teste}**:
    - {Descrição do cenário positivo.}
    - {Descrição do cenário negativo.}

{Repetir para outros testes.}

---

## Gherkin dos Testes Candidatos à Automação

### {Nome do Cenário}

```gherkin
Feature: {Descrição da Feature}
  Scenario: {Descrição do cenário positivo}
    Given {Pré-condição}
    When {Ação}
    Then {Resultado esperado}

  Scenario: {Descrição do cenário negativo}
    Given {Pré-condição}
    When {Ação}
    Then {Resultado esperado}
```
