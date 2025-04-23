/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.table('tasks', function(table) {
        table.dropColumn('user_id');
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.table('tasks', function(table) {
        table.integer('user_id')
          .unsigned()
          .references('id')
          .inTable('users')
          .onDelete('CASCADE')
          .onUpdate('CASCADE');
      });
};
