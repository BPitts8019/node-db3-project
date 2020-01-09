const knex = require("knex");
const config = require("../knexfile");
const db = knex(config.development);

//table names
const SCHEMES = "schemes";
const STEPS = "steps";

//function definitions
const find = () => {
   return db(SCHEMES);
};
const findById = (schemeId) => {
   return db(SCHEMES)
      .where("id", schemeId)
      .first();
};
const findSteps = (schemeId) => {};
const add = (scheme) => {};
const update = (changes, schemeId) => {};
const remove = (schemeId) => {};

module.exports = {
   find,
   findById,
   findSteps,
   add,
   update,
   remove
};