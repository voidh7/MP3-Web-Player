# Documento do projeto! TKZ - MP3 Player Web
<a name="inicio-documento"></a>
> [!WARNING]
>ESSE DOCUMENTO É UM TESTE E ESTÁ EM DESENVOLVIMENTO JUNTO AO PROJETO

Aqui será o documento principal do projeto, onde ira descrever cada função e funcionamento do projeto, tambem ira descrever oque cada coisa faz
para os Devs desenvolverem.

## Indices
- [Padrão de Código](#code-structure)
- [Contrato de Dados e Objetos](#data-contract)
- [Contrato de Funçoes](#function-contract)
- [Dicionário de IDs e Classes HTML e CSS](#dictionary-css-html)
- [Dicionário de Pastas](#dictionary-folders)
- [Dicionário de Arquivos e Referencia de Código](#dictionary-files)
- [Progresso e Tarefas](#progress)
  

### Padrão de Código
<a name="code-structure"></a>
O Código do projeto deve seguir um padrão para que tudo esteja em ordem, e de facil entendimento dos outros desenvolvedores!
Seguir esses padrões é fundamental para o projeto e a equipe, garantindo que tudo funcione! :sunglasses:

> ## Padrão de nomes de funções

> ### JavaScript

Para Variaveis e Funções use o padrão `camelCase` (começa minúsculo, palavras seguintes maiúsculas).

Errado: `UserListByDate`, `GetPlayerName`,`set_user_name()`<br>
Certo: `userList`,`setUserName()`,`gameStatus`

Para variaveis constantes escreva tudo maiusculo (Para variaveis que não vão ou não podem ser alteradas)

Errado: `maxUsers`, `app_key`<br>
Certo: `MAX_USERS`, `SERVER_PORT`

Para funções `Globais` e Funções construtoras use o padrão `PascalCase` exemplo:<br>
`GameLoop()`, `AudioStream()`


> [!IMPORTANT]
> Nenhuma função deve ser entregue sem o comentário de cabeçalho!!!

Basicamente o comentário de cabeçalho é uma descrição dos argumentos da função ou metodo, que descreve cada um, e descreve oque a função retorna!<br>
Exemplo:
```js
/**
 * Filtra a lista de músicas com base em um texto.
 * @param {Array} lista - O array de objetos de música.
 * @param {string} termo - O texto digitado pelo usuário.
 * @returns {Array} - Apenas as músicas filtradas.
 */
export function filtrarMusicas(lista, termo) {
    return lista.filter(m => m.titulo.includes(termo));
}
```
Ele descreve tudo, para ninguem se perder!<br>
Descreve o tipo do argumento e o nome!<br>
Descreve o tipo de retorno e ou oque contem!

> ### CSS

Em CSS classes devem ser auto explicativas, exemplo:

`button-blue` ou `btn-blue`<br>
Você consegue entender que se trata de um botão azul estilizado!

e IDs que o JavaScript ira usar devem seguir o mesmo padrão, porem com o `js` na frente, exemplo:<br>
`js-button-blue` ou `js-btn-blue`<br>

assim vc já irá saber "Há, esse ID a gente pega com `getElementById` do JavaScript"

### Contrato de Dados e Objetos
<a name="data-contract"></a>

    Nada ainda!

### Contrato de Funções
<a name="function-contract"></a>

    Nada ainda!

### Dicionário de IDs e Classes HTML e CSS
<a name="dictionary-css-html"></a>

    Nada ainda!

### Dicionário de Pastas
<a name="dictionary-folders"></a>

    Nada ainda!

### Dicionário de Arquivos e Referencias de Código
<a name="dictionary-files"></a>

> Globais

| Nome | Descrição | Arquivo
| ---- | --------- | -------
| Nada Ainda | NDA | NDA

> ### Referencia Completa

### Progresso e Tarefas a fazer :label:
<a name="progress"></a>

- [ ] Criar estrutura basica do HTML! - `(A Fazer)`
- [ ] Criar estrutura de pastas do projeto! - `(A Fazer)`
- [ ] Criar arquivos JavaScript (Vazios) e importar no HTML! - `(A Fazer)`
- [ ] Criar arquivos CSS (Vazios) e importar no HTML! - `(A Fazer)`
