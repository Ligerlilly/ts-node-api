import { sequelize } from "../db"
import * as Sequelize  from "sequelize"
import { TodoList } from "./todo_list"

export const Todo = sequelize.define("todo", {
    name: {
        type: Sequelize.STRING
    },
    todoListId: {
        type: Sequelize.INTEGER
  }
})