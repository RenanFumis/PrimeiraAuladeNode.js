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
//Cria uma array para armazenar os usuários
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
    id: users.length ? users[users.length - 1].id + 1 : 1, //aqui acrescentei um id para cada usuário
    name: name,
    age: age,
  };
  users.push(newUser);
  response.send(newUser);
});

app.get("/users", (request, response) => {
  response.send(users);
});

app.get("/users/:id", (request, response) => {
  console.log(request.params.id);
  const currentUser = users.find(
    (user) => user.id === parseInt(request.params.id)
  );
//validando se o usuário existe
  if (!currentUser) response.send("Usuário não encontrado");

  response.send(currentUser);
});

//rota para deletar usuário
app.delete("/users/:id", (request, response) =>{
  const index = users.findIndex(
    (user) => user.id === parseInt(request.params.id)
  )
    if(index === -1) response.send("Não foi encontrado nenhum usuário")
    users.splice(0 , index)

    response.send("Usuário deletado com sucesso")
    
  response.send(currentUser)
})

app.listen(3001);
