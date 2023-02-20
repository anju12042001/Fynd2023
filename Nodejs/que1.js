var dt = require("./module.js");
var math = require("interestjs");
var interest = new math(1000, 12, 5, {tax:19});
console.log(interest);
