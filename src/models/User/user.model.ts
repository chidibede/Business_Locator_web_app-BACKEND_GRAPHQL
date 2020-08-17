import { Model } from "../model";
import Knex from "knex";

export class User extends Model{
    constructor(connection: Knex, table: string){
        super(connection, table)
    }
}