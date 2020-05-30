import config from 'config';
import { knexSnakeCaseMappers } from 'objection';
import Knex, { Config } from 'knex';

class Container {
  private readonly cache: Map<string, any> = new Map<string, any>();

  public has(key: string): boolean {
    return this.cache.has(key);
  }

  public get<T>(key: string): T {
    const data = this.cache.get(key);
    if (!data) {
      throw new Error(`Missing dependency: ${key}`);
    }

    return data instanceof Function
      ? data(this)
      : data;
  }

  public set(key: string, value: any) {
    this.cache.set(key, value);
  }
}

const container = new Container();

container.set('connection', () => {
  const dbConfig = {
    client: 'pg',
    connection: config.get('database'),
    ...knexSnakeCaseMappers()
  };

  return Knex(dbConfig as Config);
});

export default container;
