
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').insert([
    {
      ingredient_name: 'bread', 
      quantity: 2
    },
    {
      ingredient_name: 'flour', 
      quantity: 1
    },    {
      ingredient_name: 'fajita', 
      quantity: 3
    },
  ]);
};
