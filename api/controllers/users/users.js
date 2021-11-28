const moment = require('moment');

const Knex = require('../../db');

module.exports = {
  get (where = null) {
    const query = Knex('users').select(
      'id',
      'email',
      'created_at',
      'password',
    )
    if (where) {
      query.where(where);
    }
    return query;
  },
  create (data) {
    const query = Knex('users').insert({
      email: data.email,
      password: data.password,
      role_id: data.role_id,
      created_at: moment().format('YYY-MM-DD HH:mm:ss'),
      updated_at: moment().format('YYY-MM-DD HH:mm:ss'),
    });
    return query;
  }
}
