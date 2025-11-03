
//-----siempre hay que poner: -----
const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// Necesario exportar app para que se puedan ejecutar los tests correctamente
module.exports = app;

//-----------------------------------

//para ver nuestra API_KEY pero de .env pero que sigamos sin verlo
require('dotenv').config()
console.log(process.env) // remove this after you've confirmed it is workin





//HABILITAR RUTAS-----------
const filmsRoutes = require("./routes/films.js"); //importamos los datos de films.js
app.use("/api/film", filmsRoutes); //usar las rutas definidas en films.routes.js
//---------------------------

console.log("API Key:", process.env.OMDB_API_KEY);


