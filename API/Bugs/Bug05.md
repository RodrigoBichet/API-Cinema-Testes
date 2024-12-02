# POST `/ticket` Mensagem de Validação Errada  

**Descrição Resumida:**  

A mensagem de validação para o número do assento é inconsistente com a regra definida, indicando que o valor deve ser menor ou igual a 100 ao invés de 99.  

**Gravidade:**  

Alto  

**Prioridade:**  

Alta  

**Classificação:**  

DEV  

**Passos para Reproduzir:**  

Enviar uma requisição POST para `/ticket` com um número de assento superior a 99.  

Observar a mensagem de validação retornada pela API.  

**Resultado Esperado:**  

A mensagem deve informar que o número do assento deve ser menor ou igual a 99.  

**Resultado Obtido:**  

A mensagem informa incorretamente que o número do assento deve ser menor ou igual a 100.  

**Ambiente de Teste:**  

**Sistema Operacional:** Windows

**Navegador (se aplicável):** Google Chrome

**Versão da Aplicação:** X

**Configuração de Hardware:** X

**Possível Solução Proposta (Opcional):**  

Corrigir a mensagem de validação no backend para refletir a regra real.  

**Notas Adicionais:**  

Este problema pode confundir os consumidores da API e levar a erros no uso.