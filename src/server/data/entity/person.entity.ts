import { Column, OneToOne, OneToMany, JoinColumn } from "typeorm";
import { BaseEntity } from "./base/base-entity";
import { User } from "./user";
import { Post } from "./post";

export class Person extends BaseEntity{
  @Column()
  firstName: string;
  
  @Column()
  lastName: string;
  
  @OneToOne(() => User)
  @JoinColumn()
  user: User;
  
  @OneToMany(() => Post, (post) => post.person)
  posts: Post[];
}