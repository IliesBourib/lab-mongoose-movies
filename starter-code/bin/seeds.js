const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');

const dbName = 'mongoose-movies';
mongoose.connect(`mongodb://localhost/${dbName}`);

const g = [
  {
    name: "Selena Gomez",
    occupation: "Sängerin",
    catchPhrase: "Suzanne Collins"
    
  },
  {
    title: "Harry Potter",
    occupation: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    catchPhrase: "J.K. Rowling "
    
  },
  {
    title: "To Kill a Mockingbird ",
    occupation: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    catchPhrase: "Harper Lee"
    
  }
]

Celebrity.create(celebritys, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${celebritys.length} celebritys`)
  mongoose.connection.close();
});