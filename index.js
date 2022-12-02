const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/consultar', (req, res) => {
  res.send("Hola gente");
});



app.get('/saludojose', (req, res) => {
  res.send("hola gente de parte de jose");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));