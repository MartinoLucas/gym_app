//MÓDULO DE ERRORES COMUNES

// Función para generar un error de conflicto (409)
const conflictError = (msg, code = 'CONFLICT') => {
    let err = new Error();  // Crear una nueva instancia de Error
    err.code = code;        // Establecer el código de error
    err.httpStatus = 409;   // Establecer el código de estado HTTP
    err.message = msg;      // Establecer el mensaje de error
    throw err;              // Lanzar el error
  }
  
  // Función para generar un error de no encontrado (404)
  const notFoundError = (msg, code = 'NOT_FOUND') => {
    let err = new Error();
    err.code = code;
    err.httpStatus = 404;
    err.message = msg;
    throw err;
  }
  
  // Función para generar un error de no autorizado (401)
  const notAuthorizedError = (msg, code = 'UNAUTHORIZED') => {
    let err = new Error();
    err.code = code;
    err.httpStatus = 401;
    err.message = msg;
    throw err;
  }
  
  // Función para generar un error de prohibido (403)
  const forbiddenError = (msg, code = 'FORBIDDEN') => {
    let err = new Error();
    err.code = code;
    err.httpStatus = 403;
    err.message = msg;
    throw err;
  }
  
  // Función para generar un error de error interno del servidor (500)
  const internalServerError = (msg, code = 'INTERNAL_ERROR') => {
    let err = new Error();
    err.code = code;
    err.httpStatus = 500;
    err.message = msg;
    throw err;
  }
  
  // Función para generar un error de solicitud incorrecta (400)
  const badRequestError = (msg, code = 'BAD_REQUEST_ERROR') => {
    let err = new Error();
    err.code = code;
    err.httpStatus = 400;
    err.message = msg;
    throw err;
  }
  
  // Exportar todas las funciones como un objeto
  export default {
    conflictError,
    notFoundError,
    notAuthorizedError,
    forbiddenError,
    internalServerError,
    badRequestError
  }