const express = require("express");
const axios = require("axios");

const app = express();
const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Servidor-02 rodando na porta ${PORT}`);
});
