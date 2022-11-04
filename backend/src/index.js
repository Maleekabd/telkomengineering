import Express from 'express';
import Cors from 'cors';
import Session from 'express-session';
import userRoutes from '../routes/userRoutes.js';
import ProductRoutes from '../routes/productRoutes.js';
import db from '../config/database.js';

const APP_PORT = 5000;
const SESS_SECRET = "w0r03ri2j3e23j4h021ho2kjsdh2h3ne23oj"

const App = Express();

// (async () => {
//   await db.sync();
// })();

App.use(Session({
  secret: SESS_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
    secure: 'auto'
  }
}))
App.use(Cors({
  credentials: true,
  origin: 'http://localhost:5000', //origin itu adalah domain yang kita izin kan untuk mengkses API
}));

App.use(Express.json());
App.use(userRoutes);
App.use(ProductRoutes);

App.listen(APP_PORT, function () {
  console.log(`server up and running in port ${APP_PORT}`);
})
