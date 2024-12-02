# GET movies não retorna paginação correta com 20 filmes por página

**Descrição Breve:**

A rota `GET /movies` não implementa a paginação corretamente, retornando um número variável de filmes, desconsiderando o limite de 20 itens por página conforme os critérios de aceitação.

**Gravidade:**

Médio

**Prioridade:**

Média

**Classificação:**

DEV

O problema parece estar relacionado à lógica de paginação na implementação da rota.

**Passos para Reproduzir:**

Enviar uma requisição GET para a rota `/movies` sem parâmetros adicionais.

Verificar a resposta e notar que o número de filmes retornados excede ou não atinge o limite de 20 filmes por página.

Repetir o processo adicionando parâmetros de paginação explícitos e observar se o comportamento é inconsistente.

**Comportamento Esperado:**

A API deveria retornar no máximo 20 filmes por página. Caso existam mais de 20 filmes, os resultados deveriam ser divididos entre as páginas subsequentes.

**Comportamento Observado:**

A rota `GET /movies` retorna um número variável de filmes em uma única resposta, ignorando o limite de 20 filmes por página.

**Ambiente de Teste:**

**Sistema Operacional:** Windows

**Navegador (se aplicável):** Google Chrome

**Versão da Aplicação:** X

**Configuração de Hardware:** X

**Mensagens de Erro ou Logs:**

Nenhuma mensagem de erro é exibida, mas os resultados retornados não estão de acordo com os critérios de aceitação.

**Possível Solução Proposta (Opcional):**

Revisar a lógica de paginação no backend para garantir que a API respeite o limite máximo de 20 filmes por página. Certificar-se de que os parâmetros de paginação (como `page` e `limit`) sejam devidamente tratados e documentados.

**Notas Adicionais:**

Embora não seja um problema crítico, a inconsistência na paginação pode impactar a usabilidade do sistema, especialmente para aplicações que dependem de um consumo previsível de dados da API.
