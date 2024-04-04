const express = require("express");
const routes = require("./routes");

//Criando um app utilizando o Express
const app = express();
//Configurando o Express para receber requisições em formato JSON
app.use(express.json());
app.use(routes)

app.listen(3001);
