const express = require('express');
const User = require('./recipeBookModel.js')

const router = express.Router();

router.get('/', (req, res) => {
    User.getRecipes()
        .then(recipes => {
            res.status(200).json(recipes);
        })
        .catch(err=>{
            console.log(err);
            res.status(500).json({error: 'error 500 getting recipes'})
        })
})
router.get('/:id/shopping-list', (req, res) => {
    const { id } = req.params;
    User.getShoppingList(id)
        .then(list => {
            res.status(200).json(list);
        })
        .catch(err=> {
            console.log(err);
            res.status(500).json({error: 'error 500 getting shopping list'})
        })
})
router.get('/:id/instructions', (req, res) => {
    const { id } = req.params;
    User.getInstructions(id)
        .then(instructions => {
            res.status(200).json(instructions);
        })
        .catch(err=> {
            console.log(err);
            res.status(500).json({error: 'error 500 getting intructions'})
        })
})

module.exports= router;