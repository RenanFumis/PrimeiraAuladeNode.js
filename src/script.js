const express = require("express");
//Criando um app utilizando o Express
const app = express();
//Configurando o Express para receber requisições em formato JSON
app.use(express.json());

app.get("/health", (request, response) => {
  response.send(
    "Olá mundo! Minha primeira aplicação com Node.js, e utilizando a biblioteca Nodemon para reiniciar o servidor automaticamente."
  );
});

let users = [];
//Criando uma rota post para inserir um novo usuário
app.post("/users", (request, response) => {
  //Exemplo abaixo é sem utilizar a desestruturação
  // const data = request.body;
  // const newUser = {
  //   name: data.name,
  //   age: data.age,
  // };

  //Exemplo abaixo é utilizando a desestruturação
  const { name, age } = request.body;
  const newUser = {
    name: name,
    age: age,
  };
  users.push(newUser);
  response.send(newUser);
});

app.get("/users", (request, response) => {
  response.send(users);
});

app.listen(3001);
