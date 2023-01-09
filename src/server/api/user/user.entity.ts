import { Roles } from 'src/server/shared/auth/roles/role.decorator';
import { Role } from 'src/server/shared/auth/roles/role.enum';
import { Entity, PrimaryGeneratedColumn, Column, Unique } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ type: 'varchar' })
  public username: string;

  @Column({ type: 'varchar' })
  public password: string;

  @Column({ type: 'enum', enum: Role, default: Role.Admin })
  public role: Role;
}
