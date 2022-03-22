import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UserDto } from './dto/user.dto';
import { User, UserDocument } from "./schemas/user.schema";

@Injectable()
export class UsersService {

    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

    async create(createUserDto: UserDto): Promise<User> {
        return await this.userModel.create(createUserDto);
    }

    async findOne(username: string): Promise<User | undefined> {
        return this.userModel.findOne(user => user.username === username).exec();
    }
}