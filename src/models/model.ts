import Knex from "knex";
import {
  RegisterUserInterface,
  UpdateUserInterface,
} from "../interfaces/userInterfaces/userInterface";
import { CreateBusinessCategoryInterface } from "../interfaces/businessCategoryInterfaces/businessCategoryInterface";
import { CreateBusinessInterface } from "../interfaces/businessInterfaces/businessInterface";

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

  findChildren(
    conditions: {},
    child_table: string,
    relationship_conditions: {}
  ) {
    return this.connection(this.table)
      .where(conditions)
      .join(child_table, relationship_conditions);
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

  insertBusinessCategory(values: CreateBusinessCategoryInterface) {
    return this.connection(this.table).insert(values);
  }

  updateBusinessCategory(id: number, values: CreateBusinessCategoryInterface) {
    return this.connection(this.table).where({ id }).update(values);
  }

  deleteBusinessCategory(id: number) {
    return this.connection(this.table).where({ id }).del();
  }

  insertBusiness(values: CreateBusinessInterface) {
    return this.connection(this.table).insert(values);
  }

  updateBusiness(id: number, values: CreateBusinessInterface) {
    return this.connection(this.table).where({ id }).update(values);
  }

  deleteBusiness(id: number) {
    return this.connection(this.table).where({ id }).del();
  }
}
