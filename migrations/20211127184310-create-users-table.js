'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function (options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function (db, callback) {
  db.createTable('users', {
    columns: {
      id: { type: 'int', primaryKey: true, autoIncrement: true },
      email: { type: 'string', notNull: true, unique: true },
      role_id:{
        type: 'int',
        notNull: true,
        foreignKey: {
          name: 'users_role_id_fk',
          table: 'roles',
          rules: {
            onDelete: 'CASCADE',
            onUpdate: 'RESTRICT'
          },
          mapping: {
            role_id: 'id'
          }
        }
      },
      password: { type: 'string', notNull: true },
      email_confirmed_at: { type: 'timestamp', notNull: false, },
      create_at: { type: 'string', defaultValue: Date() },
      updated_at: { type: 'string', defaultValue: Date() },
    },
    ifNotExists: true
  }, callback);
};

exports.down = function (db) {
  db.dropTable('users');
};

exports._meta = {
  "version": 1
};
