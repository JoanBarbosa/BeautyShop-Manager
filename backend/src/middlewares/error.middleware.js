function errorHandler(error, _req, res, _next) {
  console.error(error);

  const statusCode = Number.isInteger(error.statusCode) ? error.statusCode : 500;
  return res.status(statusCode).json({
    success: false,
    message: statusCode === 500 ? "Error interno del servidor" : error.message
  });
}

module.exports = errorHandler;
