const jwt = require("jsonwebtoken");

const generateToken = (user) => {
  if (!user) return undefined;
  try {
    const token = jwt.sign(user, process.env.PRIVATE_KEY, {
      algorithm: "HS512",
      expiresIn: "2d",
    });
    return token || undefined;
  } catch (err) {
    return undefined;
  }
};

module.exports = { generateToken };