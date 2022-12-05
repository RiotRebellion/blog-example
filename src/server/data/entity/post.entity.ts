import { Column, ManyToOne } from 'typeorm';
import { BaseEntity } from './base/base-entity';
import { Person } from './Person';

export class Post extends BaseEntity{
  @Column()
  title: string;
    
  @Column()
  content: string;
    
  @ManyToOne(() => Person, (person) => person.posts)
  person: Person;
}