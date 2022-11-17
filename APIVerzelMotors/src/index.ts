import express from 'express';

const app = express();

const port = 3001;
app.listen((port), () => {
  console.log(`🚀 Bem vindo! O servidor está rodando na porta https://localhost${port}`);
});