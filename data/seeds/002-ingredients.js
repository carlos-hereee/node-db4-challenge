
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').insert([
    {
      ingredient_name: 'bread', 
      quantity: 2, 
      recipe_id: 2
    },
    {
      ingredient_name: 'tortilla', 
      quantity: 1,
      recipe_id: 1
    },    
    {
      ingredient_name: 'fajita', 
      quantity: 3,
      recipe_id: 1
    },
    ,    {
      ingredient_name: 'fajita', 
      quantity: 3,
      recipe_id: 2
    },

  ]);
};
