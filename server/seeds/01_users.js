/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
  .then(function () {
    // Inserts seed entries
    return knex('users').insert([
      {
        username:'dk',
        email: 'nigel@email.com',
        password: 'dorwssap',
        role:'admin'
      },
      {
  
        username:'dk7',
        email: 'nakaz@email.com',
        password: 'password1',
         role:'employee'
      },
      {
      
        username:'dk3',
        email: 'jaywon@email.com',
        password: 'password123',
         role:'manager'
      }
    ]);
  });
};