import config from 'config';
import { knexSnakeCaseMappers } from 'objection';
import Knex, { Config } from 'knex';

const dbConfig = {
  client: 'pg',
  connection: config.get('database'),
  // pool: { min: 0, max: 10, propagateCreateError: false },
  ...knexSnakeCaseMappers()
};

const knex = Knex(dbConfig as Config);

export default knex;