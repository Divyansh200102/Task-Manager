/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
  .then(function () {
    // Inserts seed entries
    return knex('tasks').insert([
      {//insert which team the task belong to here as well
        title: 'Vaccuum the floors',
        description: 'Vaccum the living room and all bedroom',
        is_complete: false,
       
      },
      {
        title: 'Clean the car',
        description: 'Wash, wax and vacuum the car',
        is_complete: false,
      
      },
      {
        title: 'Buy groceries',
        description: 'Milk, bread, cheese, eggs, flour',
        is_complete: true,
     
      }
    ]);
  });
};