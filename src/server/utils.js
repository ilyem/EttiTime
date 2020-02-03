const crypto = require("crypto");
function crypt (password) {
  return crypto.createHash("sha256")
  .update(password)
  .digest("hex")
}
exports.crypt = crypt;
