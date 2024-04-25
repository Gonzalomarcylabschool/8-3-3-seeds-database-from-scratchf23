exports.up = async function (knex) {
  return knex.schema.alterTable('posts', function (table) {
    table.dropColumn('content');
    table.string('post_content');
  });
};

// notice how the `down` function undoes the `up` function's changes
exports.down = async function (knex) {
  knex.schema.alterTable('posts', function (table) {
    table.dropColumn('post_content');
    table.string('content');
  });
};