const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/consultar', (req, res) => {
  res.send("Hola gente");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));