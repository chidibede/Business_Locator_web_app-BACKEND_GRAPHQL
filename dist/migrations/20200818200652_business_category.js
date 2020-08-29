"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = void 0;
function up(knex) {
    return __awaiter(this, void 0, void 0, function* () {
        knex.schema
            .hasTable("businessCategory")
            .then(exists => {
            if (!exists) {
                return knex.schema.createTable("businessCategory", (table) => {
                    table.bigIncrements("id").primary();
                    table.string("name").notNullable().unique();
                    table.string("type").notNullable();
                    table.timestamp('created_at').defaultTo(knex.fn.now());
                });
            }
        })
            .catch((err) => console.log("unable to create table" + err));
    });
}
exports.up = up;
function down(knex) {
    return __awaiter(this, void 0, void 0, function* () {
        return knex.schema.dropTable("businessCategory");
    });
}
exports.down = down;
