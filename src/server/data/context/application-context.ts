import { DataSource } from 'typeorm';

const ApplicationContext = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '61344604',
  database: 'blog',
  entities: ['dist/**/**.entity.{ .ts,.js'],
  synchronize: false,
});

ApplicationContext.initialize()
  .then(() => {
    console.log('success');
  })
  .catch((err) => {
    console.error(`${err}`);
  });
