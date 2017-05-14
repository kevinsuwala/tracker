const usersController = require('../controllers').users;
const sessionsController = require('../controllers').sessions;
const categoriesController= require('../controllers').categories;


module.exports = (app) => {
  // ----------- User routes
  app.get('/api/users', usersController.list);
  app.get('/api/users/:userId', usersController.retrieve);
  app.get('/api/users/:userId/categories', usersController.categories);
  app.get('/api/users/:userId/sessions', usersController.sessions);
  app.post('/api/users', usersController.create);
  app.put('/api/users/:userId', usersController.update);
  app.delete('/api/users/:userId', usersController.destroy);

  // ----------- Category routes
  app.get('/api/categories', categoriesController.list);
  app.get('/api/categories/:categoryId', categoriesController.retrieve);
  app.post('/api/categories', categoriesController.create);
  app.put('/api/categories/:categoryId', categoriesController.update);
  app.delete('/api/categories/:categoryId', categoriesController.destroy);
  
  // ----------- Session routes
  app.get('/api/sessions', sessionsController.list);
  app.get('/api/sessions/:sessionId', sessionsController.retrieve);
  app.post('/api/sessions', sessionsController.create);
  app.put('/api/sessions/:sessionId', sessionsController.update);
  app.delete('/api/sessions/:sessionId', sessionsController.destroy);

  app.get('/api', (req, res) => res.status(200).send({
    message: 'Oops, you probably shouldn\'t be here',
  }));
};
