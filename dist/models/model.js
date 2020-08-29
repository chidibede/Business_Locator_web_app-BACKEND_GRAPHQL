"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model = void 0;
// create the class that will model all the possible database queries
class Model {
    constructor(connection, table) {
        this.connection = connection;
        this.table = table;
    }
    findAll() {
        return this.connection(this.table).select();
    }
    findById(id) {
        return this.connection(this.table).where({ id }).select().first();
    }
    findByEmail(email) {
        return this.connection(this.table).where({ email }).select().first();
    }
    findOne(conditions) {
        return this.connection(this.table).where(conditions).select().first();
    }
    find(conditions) {
        return this.connection(this.table).where(conditions).select();
    }
    findChildren(conditions, child_table, relationship_conditions) {
        return this.connection(this.table)
            .where(conditions)
            .join(child_table, relationship_conditions);
    }
    insertUser(values) {
        return this.connection(this.table).insert(values);
    }
    updateUser(id, values) {
        return this.connection(this.table).where({ id }).update(values);
    }
    deleteUser(id) {
        return this.connection(this.table).where({ id }).del();
    }
    insertBusinessCategory(values) {
        return this.connection(this.table).insert(values);
    }
    updateBusinessCategory(id, values) {
        return this.connection(this.table).where({ id }).update(values);
    }
    deleteBusinessCategory(id) {
        return this.connection(this.table).where({ id }).del();
    }
    insertBusiness(values) {
        return this.connection(this.table).insert(values);
    }
    updateBusiness(id, values) {
        return this.connection(this.table).where({ id }).update(values);
    }
    deleteBusiness(id) {
        return this.connection(this.table).where({ id }).del();
    }
}
exports.Model = Model;
