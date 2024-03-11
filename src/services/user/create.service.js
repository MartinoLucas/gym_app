import errorHelper from "../../helpers/error.helper.js"
import getPool from '../../db/getPool.js'

const main = async (user) => {
    try {
        //conectarnos
        const pool = await getPool()
        //dar de alta
        const sqlQuery = 'INSERT INTO user (email, password) VALUES (?,?)'
        const values = [user.email, user.password]

        const [response] = await pool.query(sqlQuery, values)

        if (response.affectedRows !== 1) {
            errorHelper.conflictError('Error al insertar un usuario', 'CREATE_USER_ERROR')
        }

        //devolver respuesta
        return response.insertId
    } catch (error) {
        errorHelper.internalServerError(error.message, 'CREATE_USER_ERROR')
    }
}

export default main