# Algoritmos

---

### **1. fibonacci.js**

Crie uma função que sempre recebe um número como argumento, e deve retornar uma array com os N elementos da sequência de Fibonacci.

<aside>
💡 Ex.: ao passar 6 como argumento, deve retornar: **[0, 1, 1, 2, 3, 5]**.

</aside>

### 2. classificador.js

Crie uma função que sempre recebe uma array de objetos com as seguintes propriedades:

- souEu: bool
- responsavel: bool
- nome: str

Você deve organizar os objetos da mesma maneira de um grupo de WhatsaApp e retornar um array de nomes, na seguinte ordem:

1. Você (propriedade souEu: “true”)
2. Responsáveis (propriedade responsavel: “true” e listados em ordem alfabética)
3. Não responsáveis (listados em ordem alfabética)

### 3. faxina.js

Crie uma função que sempre recebe um objeto como argumento e retorna-o excluindo as propriedades sem valor.

<aside>
💡 Ex.: {"fizz": "buzz", "foo": null, "bar": 42} deve retornar {"fizz": "buzz", "bar": 42}

</aside>

### 4. validade.js

Crie uma função que recebe uma data e uma string. Essa string é a validade. Você deve retornar indicando se está expirado ou não.

<aside>
💡 Ex: ("2021-11-17T20:40:09.503Z", "10d") retorna false; ("2021-12-10T00:00:00.000Z", "180d") retorna true.

</aside>

### 5. molduras.js (EXTRA, OPCIONAL)

Crie uma função que recebe dois números maiores que zero e exibe na tela (console) uma moldura com essas dimensões.

```jsx
Ex: (9, 6)

+-------+
-       -
-       -
-       -
-       -
+-------+
```

```jsx
*Ex: (1, 3)
+
-
+*
```

Abraços e boa sorte!

**Equipe Cowala**

# Back-end

## Instruções iniciais

---

Ola dev, Como vai ?

Abaixo iremos descrever os 2 desafios que você terá que fazer nesse processo seletivo. Vale lembrar que aqui vamos avaliar suas habilidades no back-end com a stack de nodeJS com express.

- **Observações 1:** O uso do Express como framework e do typescript como superset de JS não é obrigatório porem fortemente recomendado pois é a stack utilizada no back-end da empresa
- **Observação 2:** Neste desafio será levado em conta a capacidade de organização e documentação do projeto, seguindo as boas praticas de código.

## Exercícios

---

### 1. Lista de mercado

Você deve criar um CRUD em memoria (lista como banco de dados) que tenha os 5 metodos listado abaixo:

- CREATE - Deve ser possivel criar um item na lista de mercado, o modelo a ser criado deve ter um nome, um preço e um id. Exemplo: [{ id: 1, item: arroz, preco: 1.50}]
- UPDATE - Deve ser possivel atualizar o preço de um item. O item deve ser encontrado atraves do seu id
- READ-ALL - Deve ser possivel listar todos itens da lista
- READ-ONE - Deve ser possivel listar um unico item. A busca deve ser feita por id
- DELETE - Deve ser possivel Deletar um item da lista. O item a ser deletado deve ser buscado atraves do seu id

### 2. Criando um CRUD de uma lista de conversão de moedas consumindo uma api externa

Você deve criar um CRUD em memoria (lista como banco de dados) que tenham os 5 metodos listados abaixo. A diferença do exercicio anterior é que as informações para o crud virão de uma API Externa:  [https://economia.awesomeapi.com.br/last/USD-BRL](https://economia.awesomeapi.com.br/last/USD-BRL)

- CREATE - Deve ser possivel criar um registro no banco de dados contendo o valor enviado, o valor convertido, a moeda original e a moeda da conversão. Exemplo: [{ id:1, moedaOriginal: BRL, moedaDaConversão: USD, valorEnviado: 10, valorConvertido: 50 }]
- READ-ALL - Deve ser possivel lista todos registros de conversão feitos
- READ-ONE - Deve ser possivel lista um registro de conversão buscando pelo ID da conversão
- DELETE - Deve ser possivel deletar um registro de conversão

## Avaliação

---

Agora que você já viu todas as atividades, aqui está como seu código será avaliado:

- **Organização do repositório:** Estrutura das pastas, arquivos e commits.
- **Clareza do código:** Adesão de boas práticas, facilidade de entendimento e formatação.
- **Compreensão e execução da atividade:** Entender o que a atividade pediu e executar isso atendendo os requisitos.

Abraços e boa sorte!

**Equipe Cowala**