import path from 'node:path';
import express from 'express';
var cors = require('cors');
import mongoose from 'mongoose';
import { router } from './router';



mongoose.connect('mongodb+srv://root:dfFjYgivNBWtNfJw@cluster0.r1tvuxx.mongodb.net/?retryWrites=true&w=majority')
.then(() => {

  const app = express();
  const port = 3001;

  app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
  app.use(cors());
  app.use(express.json());
  app.use(router);

  app.listen((port), () => {
  console.log(`🚀 Bem vindo! O servidor está rodando na porta: http://localhost:${port}`);
});
})
.catch(() => console.log('❌ Erro ao conectar ao MongoDB'));

