// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  all: function(callBack) {
    orm.all("burgers", function(res) {
      callBack(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(columName, vals, cb) {
    orm.create("burgers", columName, vals, function(res) {
      cb(res);
    });
  },
  update: function( id, cb) {
    orm.update("burgers", {devoured:true}, "id = " + id, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;
