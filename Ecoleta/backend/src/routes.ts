import express from 'express';

import  { celebrate, Joi} from 'celebrate';

import multer from 'multer';
import multerConfig from '../src/config/multer';

import PointControllers from './controllers/PointsControllers';
import ItemsControllers from './controllers/ItemsControllers';

// index, show, create, update, delete

const routes = express.Router();
const uploads = multer(multerConfig);

const pointControllers = new PointControllers();
const itemsControllers = new ItemsControllers();

routes.get('/items', itemsControllers.index);

routes.post('/points',
     uploads.single('image'),
     celebrate({
         body: Joi.object().keys({
            name: Joi.string().required(),
            email: Joi.string().required().email(),
            city: Joi.string().required(),
            whatsapp: Joi.string().required(),
            latitude: Joi.number().required(),
            longitude: Joi.number().required(),
            uf: Joi.string().required().max(2),
            items: Joi.string().required(),
         })
     }, {
         abortEarly: false,
     }), 
     pointControllers.create);

routes.get('/points', pointControllers.index);
routes.get('/points/:id', pointControllers.show);

export default routes;