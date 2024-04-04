//Cria uma array para armazenar os usuários
let users = [];

//Função de criar usuário
function createUsers(request, response) {
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
}

//Função de listar usuários
function listUsers(request, response) {
  return response.status(200).json(users);
}
//Função de listar detalhes do usuário
function listUserDetail(request, response) {
  const currentUser = users.find(
    (user) => user.id === parseInt(request.params.id)
  );
  //validando se o usuário existe
  if (!currentUser) return response.status(404).json("Usuário não encontrado");

  return response.status(200).json(currentUser);
}
//Função de deletar usuário
function deleteUser(request, response) {
  const index = users.findIndex(
    (user) => user.id === parseInt(request.params.id)
  );
  if (index === -1)
    response.status(404).json("Não foi encontrado nenhum usuário");
  users.splice(0, index);

  return response.status(200).json("Usuário deletado com sucesso");

  return response.send(currentUser);
}

//Função de atualizar usuário
function updateUsers(request, response) {
  const { age, name } = request.body;
  const index = users.findIndex(
    (user) => user.id === parseInt(request.params.id)
  );
  if (index === -1)
    response.status(404).json("Não foi encontrado nenhum usuário");

  const updateUsers = {
    id: users[index].id,
    name: name,
    age: age,
  };

  users[index] = updateUsers;

  return response.status(200).json(updateUsers);
}

//Exportando as funções
module.exports = {
  createUsers,
  listUsers,
  listUserDetail,
  deleteUser,
  updateUsers,
};
