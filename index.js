// // index.js
// const greet = (name) => `Hi, ${name}! Welcome!`;
// module.exports = greet;



// exports.greet = (name) => {
//   return `Hi, ${name}! Welcome!`;
// };

// export default greet; // Use ES6 export syntax

// index.js
const greet = (name) => `Hi, ${name}! Welcome!`;
const { default: Dropdown } = require("./Dropdown");
module.exports = {
  greet,
  Dropdown,  // Export the dropdown functionality
};
