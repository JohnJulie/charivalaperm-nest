import { Model } from 'mongoose';
import { UserDto } from './dto/user.dto';
import { User, UserDocument } from "./schemas/user.schema";
export declare class UsersService {
    private userModel;
    constructor(userModel: Model<UserDocument>);
    create(createUserDto: UserDto): Promise<User>;
    findOne(username: string): Promise<User | undefined>;
}
