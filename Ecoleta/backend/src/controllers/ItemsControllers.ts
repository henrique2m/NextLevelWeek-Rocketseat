import { Request, Response } from 'express';
import Knex from '../database/connection';

class ItemsControllers {
    async index (req: Request, res: Response) {
        const items = await Knex('items').select('*');
    
        const serializedItems = items.map(item => {
            return {
                id: item.id,
                title: item.title,
                image_url: `http://192.168.0.112:3333/uploads/${item.image}`,
            }
        });
    
        return res.json(serializedItems);
    }
}

export default ItemsControllers;