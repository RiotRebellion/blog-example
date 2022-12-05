import { Column } from 'typeorm';
import { BaseEntity } from './base/base-entity';

export class User extends BaseEntity {
  @Column()
  username: string;

  @Column()
  password: string;
}
