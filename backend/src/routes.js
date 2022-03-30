const express = require('express');
const { route } = require('express/lib/application');

const AnimalsControllers = require('./controllers/AnimalsControllers');
const ProfileController = require('./controllers/ProfileController');
const Sessioncontroller = require('./controllers/Sessioncontroller');
const UserController = require('./controllers/UserControllers');


const routes = express.Router();

routes.post('/sessions', Sessioncontroller.create);

routes.get('/users', UserController.index);
routes.post('/users', UserController.create);

routes.get('/profile', ProfileController.index);

routes.post('/animals', AnimalsControllers.create);
routes.get('/animals', AnimalsControllers.index);
routes.delete('/animals/:id', AnimalsControllers.delete);

module.exports = routes;