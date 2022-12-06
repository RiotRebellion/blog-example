import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ type: 'varchar' })
  public username: string;

  @Column({ type: 'varchar' })
  public password: string;
}
