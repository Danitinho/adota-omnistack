/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('animals', function(table){
        table.increments();

        table.string('animal_name').notNullable();
        table.string('description').notNullable();
        table.decimal('animal_age').notNullable();
        
        table.string('user_id').notNullable();

        table.foreign('user_id').references('id').inTable('users');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('animals')
};
