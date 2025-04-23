/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
  await knex.schema.alterTable("users", function (table) {
    table.string("role");
  });

  await knex("users").update({ role: "user" });

  await knex.schema.alterTable("users", function (table) {
    table.string("role").notNullable().alter();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.alterTable("users", function (table) {
    table.dropColumn("role");
  });
};
