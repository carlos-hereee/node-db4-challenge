
exports.up = function(knex) {
    return knex.schema
        .createTable('recipe_book', tbl => {
            tbl.increments();
            tbl.text('recipe_name', 128).unique().notNullable()
        })
        .createTable('ingredients', tbl => {
            tbl.increments();
            tbl.text('ingredient_name', 128).unique().notNullable()
            tbl.integer('quantity').notNullable().unsigned();
            tbl
            .integer('recipe_id')
            .unsigned()
            .references('id')
            .inTable('recipe_book')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');

        })  
        .createTable('recipe_ingredient', tbl => {
            tbl
                .integer('recipe_id')
                .unsigned()
                .references('id')
                .inTable('recipe_book')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');
            tbl
                .integer('ingredient_id')
                .unsigned()
                .references('id')
                .inTable('ingredients')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');
            tbl.primary(['recipe_id','ingredient_id']);
        })
        .createTable('instructions', tbl => {
            tbl.increments();
            tbl.integer('steps').unsigned().notNullable();
            tbl.text('instruction').notNullable();
            tbl.integer('recipe_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('recipe_book')
                .onUpdate('CASCADE')
                .onDelete('CASCADE')
        })

};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('instructions')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('recipe_ingredient')
        .dropTableIfExists('recipe_book')
  
};
