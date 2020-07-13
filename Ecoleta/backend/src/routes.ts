import express from 'express';

import PointControllers from './controllers/PointsControllers';
import ItemsControllers from './controllers/ItemsControllers';

// index, show, create, update, delete

const routes = express.Router();
const pointControllers = new PointControllers();
const itemsControllers = new ItemsControllers();

routes.get('/items', itemsControllers.index);

routes.post('/points', pointControllers.create);
routes.get('/points', pointControllers.index);
routes.get('/points/:id', pointControllers.show);

export default routes;