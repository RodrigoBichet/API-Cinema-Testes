# POST `/movie` Não Retorna ID em Caso de Sucesso  

**Descrição Resumida:**  

Ao cadastrar um filme com sucesso, a resposta não inclui o ID do filme criado.  

**Gravidade:**  

Médio  

**Prioridade:**  

Média  

**Classificação:**  

DEV  

**Passos para Reproduzir:**  

Enviar uma requisição POST para `/movie` com os dados válidos de um filme.  

Observar a resposta da API.  

**Resultado Esperado:**  

A resposta deve incluir o ID único do filme recém-criado.  

**Resultado Obtido:**  

A resposta não contém o ID do filme.  

**Ambiente de Teste:**  

**Sistema Operacional:** Windows

**Navegador (se aplicável):** Google Chrome

**Versão da Aplicação:** X

**Configuração de Hardware:** X


**Logs ou Mensagens de Erro:**  

Sem erro explícito, mas a ausência do ID compromete operações futuras.  

**Possível Solução Proposta (Opcional):**  

Incluir o ID gerado no retorno da requisição POST `/movie`.  


**Notas Adicionais:**  

Esse bug dificulta o uso subsequente do filme cadastrado em outras operações. 