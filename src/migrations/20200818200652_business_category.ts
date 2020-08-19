import * as Knex from "knex";

export async function up(knex: Knex): Promise<void> {
  knex.schema
    .hasTable("businessCategory")
    .then(exists => {
      if (!exists) {
        return knex.schema.createTable("businessCategory", (table) => {
          table.bigIncrements("id").primary();
          table.string("name").notNullable().unique();
          table.string("type").notNullable();
          table.timestamp('created_at').defaultTo(knex.fn.now())
        });
      }
    })
    .catch((err) => console.log("unable to create table" + err));
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("businessCategory");
}
