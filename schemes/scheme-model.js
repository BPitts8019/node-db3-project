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
const findSteps = (schemeId) => {
   return db.select(`${STEPS}.id`, "scheme_name", "step_number", "instructions")
      .from(STEPS)
      .crossJoin(SCHEMES, "scheme_id", `${SCHEMES}.id`)
      .where("scheme_id", schemeId)
      .orderBy("step_number")
};
const add = async (scheme) => {
   try {
      const [id] = await db(SCHEMES).insert(scheme);
      return findById(id);
   } catch (error) {
      return Promise.reject(error);
   }
};
const update = async (changes, schemeId) => {
   try {
      await db(SCHEMES)
         .where("id", schemeId)
         .update(changes);
      return findById(schemeId);
   } catch (error) {
      return Promise.reject(error);
   }
};
const remove = async (schemeId) => {
   try {
      const scheme = await findById(schemeId);

      if (scheme) {
         await db(SCHEMES)
            .where("id", schemeId)
            .del();
         return scheme;
      } else {
         throw new Error("Invalid ID");
      }
   } catch (error) {
      return Promise.reject(error);
   }
};

module.exports = {
   find,
   findById,
   findSteps,
   add,
   update,
   remove
};