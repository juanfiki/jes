const User = require('../models/User');

/**
 * 
 * @param {*} req => Son todos los parametros que recibimos 
 * @param {*} res => Respuesta que se va a devolver
 */
function create(req, res) {
    var user = new User();
    var params = req.body;

    user.name = params.name;
    user.email = params.email;
    user.messaje = params.message;
    user.tel = params.tel;
    user.sevice=params.sevice;

    user.save((error, userCreated) => {
        if (error) {
            res.status(500).send({
                statusCode: 500,
                message: "Error en el servidor"
            })
        } else {
            if (!userCreated) {
                res.status(400).send({
                    statusCode: 400,
                    message: "Error al insertar el usaurio "
                })
            } else {
                res.status(200).send({
                    statusCode: 200,
                    message: "Usuario almacenado correctamente",
                    dataUser: userCreated
                })
            }
        }

    })
}

function update(req, res) {
    var parameters = req.body;
    var idUser = req.params.idUser;

    User.findByIdAndUpdate(idUser, parameters, (error, userUpdate) => {
        if (error) {
            res.status(500).send({
                statusCode: 500,
                message: "Error en el servidor"
            })
        } else {
            if (!userUpdate) {
                res.status(400).send({
                    statusCode: 400,
                    message: "Error al actualizar el usuario"
                })
            } else {
                res.status(200).send({
                    statusCode: 200,
                    message: "Usuario actualizado correctamente"
                })
            }
        }

    })

}

function remove(req, res) {
    var idUser = req.params.idUser;

    User.findByIdAndDelete(idUser, (error, userRemoved) => {
        if (error) {
            res.status(500).send({
                statusCode: 500,
                message: "Error en el servidor"
            })
        } else {
            if (!userRemoved) {
                res.status(400).sen({
                    statusCode: 400,
                    message: "Error al eliminar el usaurio"
                })
            } else {
                res.status(200).send({
                    statusCode: 200,
                    message: "Usuario eliminado correctamente "
                })
            }
        }
    })

}

function getAllUsers(req, res) {
    var rol = req.params.rol;
    User.find({ rol: rol }, (error, allUsers) => {
        if (error) {
            res.status(500).send({
                statusCode: 500,
                message: "Error en el servidor"
            })
        } else {
            res.status(200).send({
                statusCode: 200,
                message: "Todos los usuarios",
                allUsers: allUsers
            })
        }
    })
}

module.exports = {
    create,
    update,
    remove,
    getAllUsers
}