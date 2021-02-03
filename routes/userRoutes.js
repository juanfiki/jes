const express = require('express');
const UserController = require('../controllers/UserController');
const api = express.Router();


/**
 * POST: para insertar datos y enviar datos sensibles
 * GET: Obtener los datos de X usuarios
 * PUT: para modificar la información 
 * DELETE: para eliminar información
 * 
 */

api.get('/saludar', (req, res) => {
    console.log('llegó a la ruta saludar .....');

});

api.post('/', UserController.create);
api.put('/:idUser', UserController.update);
api.delete('/:idUser', UserController.remove);
api.get('/allUser/:rol', UserController.getAllUsers);

module.exports = api;