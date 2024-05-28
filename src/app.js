import express from "express";
import bodyParser from "body-parser";
import filmeRoutes from "../src/routes/filmeRoutes.js";

const app = express();

app.use(bodyParser.json());
app.use('/', filmeRoutes);

// exportação de variáveis e métodos do arquivo app.js para os demais arquivos do projeto.
// Aqui o arquivo app.js se torna um módulo dentro do projeto.
export default app;

