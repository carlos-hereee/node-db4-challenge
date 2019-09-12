
exports.up = function(knex) {
    return knex.schema
        .createTable('recipe_book', tbl => {
            tbl.increments();
            tbl.string('recipe_name', 128).notNullable();
        })
        .createTable('ingredients', tbl => {
            tbl.increments();
            tbl.string('ingredient_name', 128).notNullable()
            tbl.decimal('quantity', 128).notNullable();
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
        })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('ingredients')
        .dropTableIfExists('recipe_book')
  
};
