import express from 'express';
import {
  get_user,
  get_user_by_Id,
  createUser,
  update_user,
  deleteUser
} from '../controllers/users.js'
const router = express.Router();

router.get('/users', get_user);
router.get('/users/:id', get_user_by_Id);
router.post('/users', createUser);
router.patch('/users/:id', update_user);
router.delete('/users/:id', deleteUser);


export default router;
