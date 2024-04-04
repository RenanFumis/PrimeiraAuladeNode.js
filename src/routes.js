const { Router } = require("express");
const {
  createUsers,
  listUsers,
  listUserDetail,
  deleteUser,
  updateUsers,
} = require("./controllers/users.js");
const verifyToken = require("./middlewares/authMiddleware.js");
const routes = Router();

routes.get("/health", (request, response) => {
  response
    .status(200)
    .json(
      "Olá mundo! Minha primeira aplicação com Node.js, e utilizando a biblioteca Nodemon para reiniciar o servidor automaticamente."
    );
});

routes.get("/users", listUsers);

routes.get("/users/:id", listUserDetail);

//Rotas abaixo precisam de autenticação
//Criando uma rota post para inserir um novo usuário
routes.post("/users", verifyToken, createUsers);

//rota para deletar usuário
routes.delete("/users/:id", verifyToken, deleteUser);

//rota para atualizar usuário
routes.put("/users/:id", verifyToken, updateUsers);

module.exports = routes;
