const verifyToken = async (request, response, next) => {
  if (request.headers.authorization === undefined) {
    return response.status(401).json({ message: "Token não encontrado" });
  }
  return next();
};
module.exports = verifyToken;