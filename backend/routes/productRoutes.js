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

router.get('/products', verifyUser, get_products);
router.get('/products/:id', verifyUser, get_products_by_Id);
router.post('/products', verifyUser, create_products);
router.patch('/product/:id', verifyUser, update_products);
router.delete('/product/:id', verifyUser, delete_products);


export default router;
