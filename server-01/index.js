const express = require("express");
const axios = require("axios");

const app = express();
const PORT = 3000;
const API_URL = "https://jsonplaceholder.typicode.com/posts";

async function* fetchDataGenerator() {
  const { data: posts } = await await axios.get(API_URL);
  for (const post of posts) {
    yield post;
  }
}

app.get("/send-post", async (req, res) => {
  const gen = fetchDataGenerator();

  for await (const post of gen) {
    //console.log(post);
    await axios.post("http://localhost:4000/receive-posts", post);
  }

  res.send("Posts sent to destination server");
});

app.listen(PORT, () => {
  console.log(`Servidor-01 rodando na porta ${PORT}`);
});
