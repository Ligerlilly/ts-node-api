import { Sequelize } from 'sequelize'

export const sequelize = new Sequelize('postgres://jasonlane@localhost:5432/todos');
