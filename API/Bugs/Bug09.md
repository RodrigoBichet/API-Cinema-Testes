# Verbos da Rota Tickets com ID quebram a API em requests GET, PUT e DELETE

**Descrição Breve:**

As requisições GET, PUT e DELETE na rota `/tickets/{id}` resultam na interrupção completa da aplicação sempre que são executadas.

**Gravidade:**

Crítico

**Prioridade:**

Alta

**Classificação:**

DESENVOLVIMENTO

O problema aparenta estar relacionado ao tratamento inadequado de exceções ou validações no código da API.

**Passos para Reproduzir:**

Enviar uma requisição GET para a rota `/tickets/{id}` com um ID existente ou inexistente.

Observar que a aplicação falha e interrompe sua execução.

Repetir o processo para os métodos PUT e DELETE e confirmar que ocorre o mesmo comportamento.

**Comportamento Esperado:**

A API deveria responder adequadamente às requisições com base no ID fornecido:

**GET:** Retornar os dados do ticket se o ID existir ou uma mensagem de erro com status `404` se o ID não for encontrado.

**PUT:** Atualizar os dados do ticket correspondente ao ID fornecido ou retornar um erro com status `404` se o ID não for encontrado.

**DELETE:** Excluir o ticket correspondente ao ID fornecido ou retornar um erro com status `404` se o ID não existir.

**Comportamento Observado:**

A aplicação interrompe sua execução ao processar requisições com os métodos GET, PUT ou DELETE na rota `/tickets/{id}`, independentemente de o ID ser válido ou não.

**Ambiente de Teste:**

**Sistema Operacional:** Windows

**Navegador (se aplicável):** Google Chrome

**Versão da Aplicação:** X

**Configuração de Hardware:** X

**Mensagens de Erro ou Logs:**

_Cole aqui logs ou mensagens de erro retornadas pela aplicação._

Exemplo de erro observado:

Unhandled exception: Cannot read properties of undefined (reading 'id')

**Possível Solução Proposta (Opcional):**

Implementar validações para verificar a existência do ID no banco de dados antes de processar as requisições GET, PUT e DELETE. Garantir que respostas estruturadas sejam retornadas para erros, utilizando códigos de status HTTP apropriados (`404` para "Não Encontrado", `500` para erros internos).

**Notas Adicionais:**

Recomenda-se revisar o código das rotas para garantir que todas as exceções sejam tratadas corretamente e que a aplicação não falhe devido a dados ausentes ou inválidos. Esse problema pode impactar significativamente a experiência do usuário e a estabilidade do sistema.
