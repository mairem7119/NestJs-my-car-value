import { Entity, Column, AfterUpdate, PrimaryGeneratedColumn } from 'typeorm';
import { Exclude } from 'class-transformer';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  @Exclude() //Ngăn việc tải password về khi thực hiện truy vấn dữ liệu khi dùng TypeORM
  password: string;

}
