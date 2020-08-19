import * as Knex from "knex";

export async function up(knex: Knex): Promise<void> {
  knex.schema
    .hasTable("business")
    .then((exists) => {
      if (!exists) {
        return knex.schema.createTable("business", (table) => {
          table.bigIncrements("id").primary();
          table.string("name").notNullable().unique();
          table.string("location").notNullable();
          table.integer("price_range").nullable();
          table
            .integer("businessCategoryId")
            .references("id")
            .inTable("businessCategory")
            .onDelete("CASCADE");
          table.timestamp("created_at").defaultTo(knex.fn.now());
        });
      }
    })
    .catch((err) => console.log("unable to create table" + err));
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("business");
}
