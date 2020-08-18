import { Model } from "../model";
import Knex from "knex";

export class Business extends Model{
    constructor(connection: Knex, table: string){
        super(connection, table)
    }
}