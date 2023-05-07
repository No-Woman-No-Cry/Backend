const bcrypt = require("bcrypt");
async function hashPassword(password) {
  const saltRounds = 10; // jumlah salt rounds yang digunakan
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return hashedPassword;
}

module.exports = { hashPassword };
