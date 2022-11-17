import express from 'express';
import Cors from 'cors';
import session from 'express-session';
import userRoutes from '../routes/userRoutes.js';
import ProductRoutes from '../routes/productRoutes.js';
import db from '../config/database.js';
import authRouter from '../routes/authRoutes.js';
import sequelizeStore from 'connect-session-sequelize';

const APP_PORT = 5000;
const SESS_SECRET = "w0r03ri2j3e23j4h0asdjoijro3owekdjs221ho2kjsdh2h3ne23oj"

const App = express();
const sessionStore = sequelizeStore(session.Store);

const store = new sessionStore({
  db: db
}) 


// (async () => {
//   await db.sync();
// })();

App.use(session({
  secret: SESS_SECRET,
  resave: false,
  saveUninitialized: true,
  store: store,
  cookie: {
    secure: 'auto'
  }
}))
App.use(Cors({
  credentials: true,
  origin: 'http://localhost:5000', //origin itu adalah domain yang kita izin kan untuk mengkses API
}));

App.use(express.json());
App.use(userRoutes);
App.use(ProductRoutes);
App.use(authRouter);

// store.sync();

App.listen(APP_PORT, function () {
  console.log(`server up and running in port ${APP_PORT}`);
})
