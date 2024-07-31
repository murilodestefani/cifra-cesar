# Cifra de César

Este projeto é uma implementação da cifra de César, uma das mais simples e conhecidas técnicas de criptografia. A aplicação permite cifrar e decifrar mensagens utilizando uma chave de rotação e também possui uma funcionalidade de força bruta para tentar decifrar mensagens cifradas.

## Funcionalidades

1. **Cifrar Mensagem**: Converte uma mensagem de texto simples em uma mensagem cifrada utilizando uma chave de rotação.
2. **Decifrar Mensagem**: Converte uma mensagem cifrada de volta para o texto original utilizando a mesma chave de rotação.
3. **Força Bruta**: Tenta decifrar uma mensagem cifrada testando todas as possíveis chaves de rotação.
4. **Resetar**: Limpa todos os campos e redefine a chave para o valor padrão (3).

## Estrutura do Projeto

O projeto é composto por um único componente React, `CifraCesar`. 

### Principais Partes do Código

1. **Estado da Aplicação**:
    - `mensagemOriginal`: Armazena a mensagem original a ser cifrada ou decifrada.
    - `chaveCifra`: Armazena a chave de rotação utilizada para cifrar e decifrar a mensagem.
    - `mensagemCifrada`: Armazena a mensagem cifrada resultante.

2. **Funções de Cifra e Decifra**:
    - `cifrarCesar`: Função que implementa a cifra de César, deslocando os caracteres da mensagem de acordo com a chave fornecida.
    - `decifrarCesar`: Função que decifra uma mensagem cifrada, utilizando a mesma chave de rotação.
    - `bruteForceCesar`: Função que tenta decifrar uma mensagem cifrada testando todas as possíveis chaves de rotação e exibe os resultados em um alerta.

3. **Manipuladores de Evento**:
    - `handleCifrar`: Manipulador para o botão de cifrar, que chama a função `cifrarCesar` e atualiza o estado com a mensagem cifrada.
    - `handleDecifrar`: Manipulador para o botão de decifrar, que chama a função `decifrarCesar` e exibe a mensagem decifrada.
    - `handleZerar`: Manipulador para o botão de zerar, que reseta todos os campos e estados.

### Interface do Usuário

A interface é composta por:

- **Textarea** para inserir a mensagem original.
- **Input** para definir a chave de rotação.
- **Botões** para cifrar, decifrar, realizar a força bruta e zerar os campos.
- **Cabeçalho** e **rodapé** com estilo e informações adicionais.

### Abordagem para Diferentes Tipos de Caracteres

Para lidar com diferentes tipos de caracteres, a abordagem utilizada foi definir um alfabeto contendo todos os caracteres suportados pela cifra. O alfabeto inclui letras maiúsculas e minúsculas, dígitos e alguns caracteres especiais comuns (ponto, vírgula, ponto de exclamação e ponto de interrogação), além do espaço. Ao cifrar ou decifrar uma mensagem, a função verifica se o caractere está presente no alfabeto definido. Se estiver, a rotação é aplicada; caso contrário, o caractere é adicionado ao resultado sem alteração. Isso garante que caracteres não definidos no alfabeto (por exemplo, caracteres acentuados) sejam mantidos inalterados na mensagem cifrada.

### Dependências

Este projeto utiliza os seguintes pacotes:

- `@nextui-org/react` para os componentes da interface do usuário.
- `@phosphor-icons/react` para os ícones.
- `react` para construir a interface do usuário.
- `typescript` para adicionar tipagem estática ao JavaScript.

## Como Executar o Projeto

1. Clone este repositório:
    ```sh
    git clone https://github.com/seu-usuario/cifra-cesar.git
    ```

2. Navegue até o diretório do projeto:
    ```sh
    cd cifra-cesar
    ```

3. Instale as dependências:
    ```sh
    npm install
    ```

4. Inicie o servidor de desenvolvimento:
    ```sh
    npm run dev
    ```

A aplicação estará disponível em `http://localhost:3000`.

## Contato

Feito com ❤️ por [Murilo Destefani](https://github.com/murilodestefani).
