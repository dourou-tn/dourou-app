'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function (db, callback) {
  db.createTable('roles', {
    columns: {
      id: { type: 'int', primaryKey: true, autoIncrement: true },
      name: { type: 'string', notNull: true, unique: true },
      color: { type: 'string', unique: true },
      create_at: { type: 'string', defaultValue: Date() },
      updated_at: { type: 'string', defaultValue: Date() },
    },
    ifNotExists: true
  }, callback);
};

exports.down = function (db) {
  db.dropTable('roles');
};

exports._meta = {
  "version": 1
};
