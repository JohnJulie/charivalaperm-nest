import { UsersService } from "./users.service";
import { UserDto } from "./dto/user.dto";
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    create(createUserDto: UserDto): Promise<import("./schemas/user.schema").User>;
}
