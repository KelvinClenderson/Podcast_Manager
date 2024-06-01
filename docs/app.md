# Gerenciador de Podcast

### Descrição
Um app ao estilo netflix, aonde possa centralizar diferentes episodios de podcast separados por categoria

### Dominio
Podcasts feito em video

### Features
- Listar os episodios do podcast em sessões de categorias    
  - [Entreterimento, fitness, mentalidade, humor]
-  Filtrar episodios por nome de podcast
  
## Como

#### Feature:
Listar os episodios do podcast em sessões de categorias    

### Como vou implementar:

GET: Retorna lista de episodios

```Js
[
  {
  podcastName: "PodPah",
  videoId: "Ueq-Mv3_gD0",
  episode: "GORDÃO DA XJ & MAUMAU - Podpah #773",
  cover: "https://i.ytimg.com/vi/Ueq-Mv3_gD0/maxresdefault.jpg",
  link:"https://www.youtube.com/watch?v=Ueq-Mv3_gD0&t=2442s",
  category:["Entreterimento","humor"]
  },
  {
  podcastName: "PodPah",
  videoId: "Did4YSSH8o8",
  episode: "FÁTIMA BERNARDES - Podpah #772",
  cover: "https://i.ytimg.com/vi/Did4YSSH8o8/maxresdefault.jpg",
  link:"https://www.youtube.com/watch?v=Did4YSSH8o8",
  category:["Entreterimento","mentalidade"]
  },
  {
  podcastName: "PodPah",
  videoId: "JUJF2gR9hV4",
  episode: "DUQUESA - Podpah #774",
  cover: "https://i.ytimg.com/vi/JUJF2gR9hV4/maxresdefault.jpg",
  link:"https://www.youtube.com/watch?v=JUJF2gR9hV4",
  category:["Entreterimento","Pop"]
  },
]
```

GET: Retorna lista de episódios baseado em um parametro enviado pelo cliente do nome do podcast