import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ type: 'varchar' })
  public title: string;

  @Column({ type: 'varchar' })
  public body: string;
}
