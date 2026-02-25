import { DataSource } from 'typeorm';
import { typeOrmConfig } from './typeorm.config';


export default new DataSource(
  {
    ...typeOrmConfig(),
    migrations: [__dirname + '/../migrations/*.ts'],
  });