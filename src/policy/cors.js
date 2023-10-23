const express = require('express');
const cors = require('cors');
const app = express();

// Разрешение CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // Разрешение всех источников (не рекомендуется для продакшена)
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Другие настройки сервера...

app.listen(3001, () => {
  console.log('Сервер запущен на порту 3001');
});