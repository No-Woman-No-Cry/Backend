const verifyPassword = require("../src/utils/password/verifyPassword");
const hashedPassword =
  "$2b$10$JRr3B21/jhGgBgx0zIGOfeEowmC2fODKwG/ZWZFRK4pRCH/X9luAG";
const plainPassword = "password12";
1;
async function test() {
  console.log(await verifyPassword(plainPassword, hashedPassword));
}
test();
