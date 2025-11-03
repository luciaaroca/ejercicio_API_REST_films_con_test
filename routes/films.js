const filmsController = require('../controllers/films.controller');
const router = require('express').Router();

//GET:titulo
router.get("{/:title}", filmsController.getFilmByTitle);

//POST
router.post("/", filmsController.postFilm);

//PUT
router.put("/", filmsController.putFilm);

//DELETE
router.delete("/:id",filmsController.deleteFilm);

module.exports = router;