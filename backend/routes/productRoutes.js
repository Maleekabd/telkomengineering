import express from 'express';
import {
  get_products,
  get_products_by_Id,
  create_products,
  update_products,
  delete_products
} from '../controllers/products.js';
import { verifyUser } from '../middleware/authUser.js';

const router = express.Router();

router.get('/products', get_products);
router.get('/products/:id', get_products_by_Id);
router.post('/products', create_products);
router.patch('/product/:id', update_products);
router.delete('/product/:id', delete_products);


export default router;
