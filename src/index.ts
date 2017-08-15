const Koa = require('koa');
const app = new Koa();
import { sequelize } from './db'

app.use(async ctx => {
  ctx.body = 'Hello World';
});

app.listen(3000);

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  })
