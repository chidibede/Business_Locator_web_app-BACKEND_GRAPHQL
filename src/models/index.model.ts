import { User } from "./User/user.model";
import { connection } from "../config/knex";

const user = new User(connection, 'user_table');

export const model = {
    user
}