import { Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Column } from 'typeorm';

@Entity({ name: 'posts' })
export class Post 
{
  @PrimaryGeneratedColumn('increment')
  id: number;
  @Column()
  description: string;
  @Column()
  topic: string;
}
