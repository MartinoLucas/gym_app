import userService from '../../services/user/index.service.js'
import validateHelper from '../../helpers/validate.helper.js'
import schema from '../../schemas/create.schema.js'

const main = async (req, res, next) => {
    try {
        //validar schema
        await validateHelper(schema, req.body)
        //enviar al servicio
        await userService.create(req.body)
        //responder
        res.send('Usuario creado con exito.')
    } catch (error) {
        next(error)
    }
}

export default main