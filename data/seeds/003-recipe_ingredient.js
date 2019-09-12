
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe_ingredient').insert([
    { recipe_id: 1, ingredient_id: 1 },
  ]);
};
