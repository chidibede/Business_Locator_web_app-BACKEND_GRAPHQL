import { User } from "./User/user.model";
import { connection } from "../config/knex";
import { Business } from "./business/business.model";
import { BusinessCategory } from "./businessCategory/businessCategory.model";

const user = new User(connection, 'user_table');
const business = new Business(connection, 'business');
const businessCategory = new BusinessCategory(connection, 'businessCategory');

export const model = {
    user,
    business,
    businessCategory
}