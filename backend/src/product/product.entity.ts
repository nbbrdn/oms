import { Group } from 'src/group/group.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column('decimal')
  wholesalePrice: number;

  @Column('decimal')
  retailPrice: number;

  @Column()
  stock: number;

  @ManyToOne(() => Group, (group) => group.products)
  group: Group;
}
