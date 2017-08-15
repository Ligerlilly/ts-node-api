const Koa = require('koa');
const app = new Koa();
import { sequelize } from './db'
import { TodoList } from './models/todo_list'
import { Todo } from './models/todo'

app.use(async ctx => {
    ctx.body = 'Hello World';
});

app.listen(3000);
console.log('listening on port 3000')

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    })


TodoList.sync({force: true}).then(() => {
    // Table created
    return TodoList.create({
      name: 'new list'
    })
}).then(() => {
    TodoList.hasMany(Todo)
    Todo.sync({force: true}).then(() => {
        // Table created
        return Todo.create({
            name: 'first todo',
            todoListId: 1
        })
    })
})


