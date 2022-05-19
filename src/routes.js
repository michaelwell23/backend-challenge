import { Router } from 'express';
import UsersListController from './controllers/UsersListController';
import UserDetailsController from './controllers/UserDetailsController';
import UserReposController from './controllers/UserReposController';

const routes = new Router();

routes.get('/api/users', UsersListController.get);
routes.get('/api/users/:username/details', UserDetailsController.get);
routes.get('/api/users/:username/repos', UserReposController.get);

export default routes;
