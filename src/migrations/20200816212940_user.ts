import * as Knex from "knex";

export async function up(knex: Knex): Promise<void> {
  knex.schema
    .hasTable("user_table")
    .then(exists => {
      if (!exists) {
        return knex.schema.createTable("user_table", (table) => {
          table.bigIncrements("id").primary();
          table.string("username").notNullable().unique();
          table.string("email").notNullable().unique();
          table.string("password").notNullable();
          table.timestamp('created_at').defaultTo(knex.fn.now())
        });
      }
    })
    .catch((err) => console.log("unable to create table" + err));
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("user_table");
}
