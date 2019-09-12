const db = require('../data/db-config.js');

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}

function getRecipes(){
    return db('recipe_book')
}
function getShoppingList(recipe_id){
    return db('ingredients').where({ recipe_id })
}
function getInstructions(recipe_id){
    return db('instructions').where({ recipe_id})
}