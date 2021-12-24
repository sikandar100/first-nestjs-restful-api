import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Cat {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nickName: string;

  @Column()
  breed: string;

  @Column({ default: false })
  aggressive: boolean;
}
