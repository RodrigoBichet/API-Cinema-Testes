# DELETE `/movie` Retorna Código 200 em Caso de Sucesso  

**Descrição Resumida:**  

A rota DELETE `/movie` retorna o código de status 200 ao invés de 204 em operações bem-sucedidas.  

**Gravidade:**  

Médio  

**Prioridade:**  

Média  

**Classificação:**  

DEV  

**Passos para Reproduzir:**  

Enviar uma requisição DELETE para `/movie` com um ID válido.  

Observar o código de status retornado.  

**Resultado Esperado:**  

O código de status 204 deve ser retornado para indicar que a exclusão foi realizada com sucesso sem corpo de resposta.  

**Resultado Obtido:**  

O código de status 200 é retornado.  

**Ambiente de Teste:**  

**Sistema Operacional:** Windows

**Navegador (se aplicável):** Google Chrome

**Versão da Aplicação:** X

**Configuração de Hardware:** X

**Possível Solução Proposta (Opcional):**  

Ajustar o backend para retornar o código de status correto (204) ao excluir um filme.  

**Notas Adicionais:**  

O código incorreto pode causar interpretações erradas pelos consumidores da API.  