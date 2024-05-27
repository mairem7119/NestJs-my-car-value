import { Injectable } from '@nestjs/common';
import { Repository} from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
    // @InjectRepository(User) dùng để inject đối tượng repo có kiểu Repository<User> vào Repository để sử dụng các mothed trong repository mà TypeORM cung cấp
    constructor(@InjectRepository(User) private repo: Repository<User>){}

    create(email: string, password: string){
        const user = this.repo.create({email, password});

        return this.repo.save(user);
    }
}
