
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('instructions').insert([
    {
      steps: 1,
      instruction:'get a tortilla, then fold like a taco, and put stuff in there. boom! taco.',
      recipe_id: 1
    },
    {
      steps: 1,
      instruction: '2 slices of bread, put stuff in the middle and fajita. boom! torta',
      recipe_id: 2
    }
  ]);
};
