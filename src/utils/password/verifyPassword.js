const bcrypt = require("bcrypt");

async function verifyPassword(plainPassword, hashedPassword) {
  try {
    const match = await bcrypt.compare(plainPassword, hashedPassword);
    if (match) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    throw new Error("Error while verifying password");
  }
}

module.exports = verifyPassword;
