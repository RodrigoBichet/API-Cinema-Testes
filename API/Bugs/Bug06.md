# DELETE `/ticket` Quebra a Aplicação Quando ID é Inexistente  

**Descrição Resumida:**

Ao tentar deletar um ticket com um ID inexistente no banco de dados, a aplicação quebra, resultando em um erro inesperado no servidor.

**Gravidade:**

Crítico

**Prioridade:**

Alta

**Classificação:**

DEV

**Passos para Reproduzir:**

Enviar uma requisição DELETE para `/ticket` com um ID inexistente.

Observar que a aplicação retorna um erro inesperado e o sistema quebra.

**Resultado Esperado:**

A API deve retornar um código de status 404 com uma mensagem informando que o ticket não foi encontrado, sem causar a quebra da aplicação.

**Resultado Obtido:**

A aplicação quebra, retornando um erro de servidor (500 ou similar).

**Ambiente de Teste:**

**Sistema Operacional:** Windows

**Navegador (se aplicável):** Google Chrome

**Versão da Aplicação:** X

**Configuração de Hardware:** X

**Logs ou Mensagens de Erro:**

Erro de servidor exibido ao tentar realizar a exclusão de um ticket inexistente.

**Possível Solução Proposta (Opcional):**

Implementar um tratamento adequado para verificar a existência do ID no banco antes de executar a exclusão, retornando um erro 404 caso o ID não seja encontrado.

**Notas Adicionais:**

Esse bug compromete a estabilidade da aplicação e pode causar impactos graves em produção.
