import * as Knex from "knex";

export async function up(knex: Knex): Promise<void> {
  knex.schema
    .hasTable("business_category")
    .then(exists => {
      if (!exists) {
        return knex.schema.createTable("business_category", (table) => {
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
  return knex.schema.dropTable("business_category");
}
