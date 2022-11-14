import express from 'express';
import {
  login,
  logout,
  Me,
  register
} from '../controllers/auth.js'


const router = express.Router();

router.post('/register', register)
router.get('/me', Me);
router.post('/login',login);
router.delete('/logout', logout);


export default router;
