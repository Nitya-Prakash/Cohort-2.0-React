// import & export -
// As this file is now module typed, we can import and export things.

import user from "./app.js";
// As it is a default export you can access that value in any name.

import { address } from "./app.js";
// But in case of named export you have to access it with the same name which is given in that file.

console.log(user);
console.log(address);
