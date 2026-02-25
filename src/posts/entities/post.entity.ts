import { User } from '../../users/entities/user.entity';
import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Column } from 'typeorm';

@Entity({ name: 'posts' })
export class Post {
  @PrimaryGeneratedColumn('increment')
  id: number;
  @Column()
  description: string;
  @Column()
  topic: string;
  @ManyToOne(() => User, (user) => user.posts)
  user: User;
}
