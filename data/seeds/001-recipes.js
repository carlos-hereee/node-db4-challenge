
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipe_book').insert([
    { 
      recipe_name: 'taco'
    },
    {
      recipe_name: 'torta'
    }      
  ]);
};
