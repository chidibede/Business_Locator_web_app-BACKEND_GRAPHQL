import Knex from "knex";
import {RegisterUserInterface, UpdateUserInterface} from '../interfaces/userInterfaces/userInterface'

// create the class that will model all the possible database queries
export class Model {
  connection: Knex;
  table: string;

  constructor(connection: Knex, table: string) {
    this.connection = connection;
    this.table = table;
  }

  findAll() {
    return this.connection(this.table).select();
  }

  findById(id: number) {
    return this.connection(this.table).where({ id }).select().first();
  }

  findByEmail(email: string) {
    return this.connection(this.table).where({ email }).select().first();
  }

  findOne(conditions: {}) {
    return this.connection(this.table).where(conditions).select().first();
  }

  insertUser(values: RegisterUserInterface) {
    return this.connection(this.table).insert(values);
  }

  updateUser(id: number, values: UpdateUserInterface) {
    return this.connection(this.table).where({ id }).update(values);
  }

  deleteUser(id: number) {
    return this.connection(this.table).where({ id }).del();
  }
}
