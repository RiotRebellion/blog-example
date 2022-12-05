import { PrimaryGeneratedColumn, Entity } from 'typeorm';

export abstract class BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
}
