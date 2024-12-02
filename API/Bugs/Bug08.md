# PUT ticket com ID não cadastrado no banco quebra a aplicação

**Descrição Breve:**

Ao tentar atualizar um ticket usando o método PUT com um ID inexistente no banco de dados, a aplicação falha e interrompe sua execução.

**Gravidade:**

Crítico

**Prioridade:**

Alta

**Classificação:**

DEV

O problema aparenta estar relacionado ao tratamento inadequado de exceções ou validações para IDs inexistentes.

**Passos para Reproduzir:**

Enviar uma requisição PUT para a rota `/tickets/{id}` utilizando um ID que não esteja cadastrado no banco de dados.

Observar que a aplicação interrompe sua execução ao invés de retornar uma resposta apropriada.

**Comportamento Esperado:**

O sistema deveria retornar uma mensagem de erro indicando que o ID fornecido não foi encontrado, com um código de status HTTP `404 Not Found`, sem causar falhas na aplicação.

**Comportamento Observado:**

A aplicação quebra, interrompendo sua execução e não retornando uma resposta estruturada.

**Ambiente de Teste:**

**Sistema Operacional:** Windows

**Navegador (se aplicável):** Google Chrome

**Versão da Aplicação:** X

**Configuração de Hardware:** X

**Mensagens de Erro ou Logs:**

Exemplo de erro observado:

Unhandled exception: Cannot read properties of undefined (reading 'id')

**Possível Solução Proposta (Opcional):**

Adicionar uma validação no backend para verificar se o ID existe antes de executar a operação de atualização. Caso o ID não seja encontrado, retornar uma resposta estruturada com o código de status HTTP `404` e uma mensagem clara.

**Notas Adicionais:**

Esse problema pode causar grandes impactos na estabilidade e usabilidade da aplicação, sendo recomendada sua correção com urgência.
