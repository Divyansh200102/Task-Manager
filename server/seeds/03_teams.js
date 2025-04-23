/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('teams').del();

  // Inserts seed entries
  await knex('teams').insert([
    {
      name: 'Frontend Avengers',
      description: 'A team of React, Vue, and Angular wizards',
    },
    {
      name: 'Backend Ninjas',
      description: 'Node, Python, and database pros keeping it running',
    },
    {
      name: 'Fullstack Force',
      description: 'Jack-of-all-trades, master of shipping features',
    }
  ]);
};
no of members
tasks
