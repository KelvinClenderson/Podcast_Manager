## Gerenciador de Podcast: Readme

**Descrição:**

Este projeto tem como objetivo criar um aplicativo aonde podemos organizar episódios de podcasts em vídeo, categorizados para facilitar a navegação e o consumo de conteúdo.

**Domínio:**

O foco do aplicativo são podcasts em vídeo.

**Funcionalidades:**

* **Listagem de episódios por categoria:**
    * **Categorias:** Entretenimento, Fitness, Mentalidade, Humor e outras.
* **Filtro de episódios por nome do podcast:**
    * Busca por nome completo ou por palavras-chave.

**Implementação:**

**Listagem de episódios por categoria:**

A listagem de episódios será realizada através de uma API RESTful, utilizando o método GET. A resposta da API retornará uma lista de objetos JSON contendo as informações de cada episódio, incluindo:

* `podcastName`: Nome do podcast
* `videoId`: ID do vídeo no YouTube
* `episode`: Título do episódio
* `cover`: URL da imagem de capa do episódio
* `link`: URL do vídeo no YouTube
* `category`: Lista de categorias do episódio (ex: ["Entretenimento", "Humor"])

**Exemplo de resposta da API:**

```json
[
  {
    "podcastName": "PodPah",
    "videoId": "Ueq-Mv3_gD0",
    "episode": "GORDÃO DA XJ & MAUMAU - Podpah #773",
    "cover": "https://i.ytimg.com/vi/Ueq-Mv3_gD0/maxresdefault.jpg",
    "link": "https://www.youtube.com/watch?v=Ueq-Mv3_gD0&t=2442s",
    "category": ["Entretenimento", "Humor"]
  },
  {
    "podcastName": "PodPah",
    "videoId": "Did4YSSH8o8",
    "episode": "FÁTIMA BERNARDES - Podpah #772",
    "cover": "https://i.ytimg.com/vi/Did4YSSH8o8/maxresdefault.jpg",
    "link": "https://www.youtube.com/watch?v=Did4YSSH8o8",
    "category": ["Entretenimento", "Mentalidade"]
  },
  {
    "podcastName": "PodPah",
    "videoId": "JUJF2gR9hV4",
    "episode": "DUQUESA - Podpah #774",
    "cover": "https://i.ytimg.com/vi/JUJF2gR9hV4/maxresdefault.jpg",
    "link": "https://www.youtube.com/watch?v=JUJF2gR9hV4",
    "category": ["Entretenimento", "Pop"]
  }
]
```

**Filtro de episódios por nome do podcast:**

A filtragem de episódios por nome do podcast também será realizada através da API RESTful, utilizando o método GET. Um parâmetro de busca será enviado na requisição, contendo o nome completo ou palavras-chave do podcast desejado. A API retornará uma lista de episódios filtrados de acordo com o parâmetro informado.


**Como Utilizar**
1. Clone o repositorio.
2. instale as dependencias com npm install.
3. Inicie o servidor com `start:dev ou start:watch`

**Tecnologias utilizadas:**

Analisando seu arquivo `package.json`, identificamos as seguintes tecnologias utilizadas no projeto:

* **TypeScript ([https://www.typescriptlang.org/](https://www.typescriptlang.org/))** - Linguagem de programação superconjunto do JavaScript que adiciona tipagem estática.
* **Tsup ([https://github.com/egoist/tsup](https://github.com/egoist/tsup))** - Bundler ultrarrápido para módulos TypeScript.
* **Tsx ([https://www.npmjs.com/package/tsx](https://www.npmjs.com/package/tsx))** - Ferramenta de desenvolvimento web com suporte a TypeScript e JSX.
