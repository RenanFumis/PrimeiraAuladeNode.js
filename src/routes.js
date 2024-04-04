const { Router } = require("express");
const routes = Router();

routes.get("/health", (request, response) => {
  response
    .status(200)
    .json(
      "Olá mundo! Minha primeira aplicação com Node.js, e utilizando a biblioteca Nodemon para reiniciar o servidor automaticamente."
    );
});
//Cria uma array para armazenar os usuários
let users = [];
//Criando uma rota post para inserir um novo usuário
routes.post("/users", (request, response) => {
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

  return response.status(201).json(newUser);
});

routes.get("/users", (request, response) => {
  return response.status(200).json(users);
});

routes.get("/users/:id", (request, response) => {
  console.log(request.params.id);
  const currentUser = users.find(
    (user) => user.id === parseInt(request.params.id)
  );
  //validando se o usuário existe
  if (!currentUser) response.status(404).json("Usuário não encontrado");

  return response.status(200).json(currentUser);
});

//rota para deletar usuário
routes.delete("/users/:id", (request, response) => {
  const index = users.findIndex(
    (user) => user.id === parseInt(request.params.id)
  );
  if (index === -1) response.status(404).json("Não foi encontrado nenhum usuário");
  users.splice(0, index);

  return response.status(200).json("Usuário deletado com sucesso");

  return response.send(currentUser);
});

//rota para atualizar usuário
routes.put("/users/:id", (request, response) => {
  const { age, name } = request.body;
  const index = users.findIndex(
    (user) => user.id === parseInt(request.params.id)
  );
  if (index === -1) response.status(404).json("Não foi encontrado nenhum usuário");

  const updateUsers = {
    id: users[index].id,
    name: name,
    age: age,
  };

  users[index] = updateUsers;

  return response.status(200).json(updateUsers);
});

module.exports = routes;
