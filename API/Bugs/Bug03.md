# POST `/movie` Não Valida a Unicidade do Nome  

**Descrição Resumida:**

A API permite o cadastro de filmes com nomes duplicados, causando inconsistências no banco de dados.

**Gravidade:**

Alto

**Prioridade:**

Alta

**Classificação:**

DEV

**Passos para Reproduzir:**

Enviar uma requisição POST para `/movie` com o nome de um filme já cadastrado.

Observar que o cadastro é realizado com sucesso, mesmo com o nome duplicado.

**Resultado Esperado:**

O sistema deve retornar um erro ao tentar cadastrar um filme com um nome já existente.

**Resultado Obtido:**

O filme é cadastrado com sucesso, mesmo com nome duplicado.

**Ambiente de Teste:**

**Sistema Operacional:** Windows

**Navegador (se aplicável):** Google Chrome

**Versão da Aplicação:** X

**Configuração de Hardware:** X

**Possível Solução Proposta (Opcional):**

Implementar uma validação no backend para verificar a unicidade do nome do filme antes de realizar o cadastro.

**Notas Adicionais:**

Esse problema pode levar a dificuldades na identificação de filmes únicos.
