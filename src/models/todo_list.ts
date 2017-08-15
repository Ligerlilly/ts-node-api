import { sequelize } from "../db"
import * as Sequelize  from "sequelize"
import { Todo } from './todo'

export const TodoList = sequelize.define("todo_list", {
  name: {
    type: Sequelize.STRING
  },
})

