import { Role } from 'src/server/shared/utils/enums/roles/role.enum';
import { Entity, PrimaryGeneratedColumn, Column, Unique } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ type: 'varchar' })
  public username: string;

  @Column({ type: 'varchar' })
  public password: string;

  public roles: Role[];
}
