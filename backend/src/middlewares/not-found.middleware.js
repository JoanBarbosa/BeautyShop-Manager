function notFound(_req, res) {
  return res.status(404).json({
    success: false,
    message: "Recurso no encontrado"
  });
}

module.exports = notFound;
