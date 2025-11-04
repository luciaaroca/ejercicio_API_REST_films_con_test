
require('dotenv').config(); //para cargar
/*Conectarse a una API externa (OMDb), buscar una película específica por 
su título, obtener sus datos en formato JSON, y devolverlos en forma de un 
array con un solo objeto.*/ 
//GET(leer)
const fetchFilm = async (title) => {
try {
    const apiKey = process.env.API_KEY;
    if (!title) throw new Error("Se requiere un título de película");

    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${apiKey}&t=${title}`
    );
    const data = await response.json();

    if (data.Response === "False") {
      return null; // no se encontró
    }
    return data;
  }catch(error){
    console.error("Error al obtener detalles de la película:", error.message);
    return null;
  }
}

//POST (añadir)-->no hay que ponerlo aqui ya que la api no permite añadir un objeto
//PUT (editar)-->igual que el anterior
//DELETE (borrar) --> igual que el anterior
module.exports =  fetchFilm;
