# Documentação para Configuração do Ambiente do K6

## Requisitos

-   **VS Code**: Certifique-se de ter o Visual Studio Code (VS Code) instalado para facilitar o desenvolvimento e a execução dos scripts.
-   **K6**: Ferramenta de teste de carga e desempenho. Siga os passos abaixo para instalá-la corretamente.

## Passos para Configurar o K6

1. **Instalar o K6**:

    - Acesse o link oficial para download e instalação do K6:  
      [Instalar K6](https://grafana.com/docs/k6/latest/set-up/install-k6/)
    - Clique no link do instalador oficial e siga os passos recomendados para o seu sistema operacional.

2. **Preparar o Ambiente no VS Code**:

    - Abra o **Visual Studio Code**.
    - Crie ou abra um projeto onde deseja configurar o K6.
    - No terminal do VS Code, execute o comando abaixo para criar um novo script de teste com o K6:
        ```bash
        k6 new
        ```

3. **Executar um Script de Teste**:
    - Após criar o script de teste (por exemplo, `script.js`), execute-o com o comando:
        ```bash
        k6 run script.js
        ```

## Dicas

-   Certifique-se de que os scripts estejam no formato adequado para o K6.
-   Utilize o terminal integrado do VS Code para facilitar a execução dos comandos.
-   Consulte a documentação oficial para explorar mais funcionalidades do K6:  
    [Documentação do K6](https://grafana.com/docs/k6/latest/get-started/running-k6/)
