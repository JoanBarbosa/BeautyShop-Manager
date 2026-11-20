function getHealth(_req, res) {
  return res.status(200).json({
    success: true,
    message: "BeautyShop Manager API funcionando"
  });
}

module.exports = { getHealth };
