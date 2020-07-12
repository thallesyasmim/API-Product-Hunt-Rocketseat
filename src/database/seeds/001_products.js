
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('products').del()
    .then(function () {
      // Inserts seed entries
      return knex('products').insert([
        {
          title: 'React Native', 
          description: 'Build native apps with React',
          url: 'http://github.com/facebook/react-native'
      },
      ]);
    });
};
