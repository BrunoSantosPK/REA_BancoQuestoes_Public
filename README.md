# Banco de Questões

### Recurso Educacional Aberto

*Banco de questões de Ciências da Natureza, com aplicação no Ensino Básico.*

Esta aplicação cria uma bateria de questões aleatórias, podendo envolver todos os conteúdos da área de Ciências da Natureza ou apenas um tema em específico. Cada questão possui um comentário sobre o tema tratado e a resposta correta.

Base URL: *https://questoesquimica.herokuapp.com*

**Rota GET: /quimica/topicos**

Lista todos os conteúdos, com respectivo número de questões, cadastrados no banco para Química.

Exemplo:

```
{
    "statusCode": 200,
    "cadastros": [
        {
            "topico": "Termodinâmica",
            "quantidade": 10
        },
        ...
    ]
}
```

**Rota GET: /quimica/bateria**

Cria a bateria de questões aleatórias. Possui dois Query Params, que configuram o resultado final.

Query: topico. *Recebe o nome do conteúdo limitante, que são aqueles obtidos para rota anterior. Para uma bateria com questões com todos os conteúdos misturados, passar o valor "todos".*

Query: total. *Define a quantidade de questões a serem retornadas, podendo ser qualquer valor numérico.*


Exemplo: /quimica/bateria?topico=Termodinâmica&total=2

```
{
  "statusCode": 200,
  "questoes": [
    {
      "_id": "5e8e042606765c03d8f95636",
      "descricao": "Uma propriedade icônica da termodinâmica é definida frequentemente como “nível de desordem de um sistema”. Esta é a:",
      "opcao_1": "Entalpia.",
      "opcao_2": "Energia.",
      "opcao_3": "Pressão.",
      "opcao_4": "Entropia.",
      "resposta": "opcao_4",
      "comentario": "É fácil entender entropia como sendo nível de desordem, já que podemos associar essa propriedade abstrata com algo que vemos no cotidiano, como o nosso quarto ao final do dia.",
      "dificuldade": 1,
      "topico": "Termodinâmica"
    },
    {
      "_id": "5e94b97086daaa001703bee9",
      "descricao": "As escalas de temperaturas são baseadas em algum ponto de referência. Nas escalas absolutas, o ponto de referência é o zero absoluto, que coincide com o zero da escala. Na escala Celsius, quais foram os pontos de referência?",
      "opcao_1": "Temperaturas médias da Terra.",
      "opcao_2": "Temperaturas do corpo humano.",
      "opcao_3": "Pontos de fusão e ebulição da água.",
      "opcao_4": "Pontos de fusão e ebulição do etanol.",
      "resposta": "opcao_3",
      "comentario": "Para a escala Celsius, o 0 °C é o ponto de fusão da água e o 100 °C é o ponto de ebulição da água.",
      "dificuldade": 1,
      "topico": "Termodinâmica"
    }
  ]
}
```

**Rota GET: /quimica/all**

Esta rota envia como resposta todas as questões cadastradas no banco. A estrutura da resposta é exatamente igual a da rota anterior.

**Projeto idealizado por Bruno Santos, engenheiro químico, professor e programador.**

*Projeto Node, com dados armazenados em uma conta pesoal do MongoDB*

*Contato para sugestões, críticas e melhorias: bruno.ajsch@yahoo.com*