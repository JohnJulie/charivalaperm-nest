import { Controller, Post, Body } from '@nestjs/common';
import { UsersService } from "./users.service";
import { UserDto } from "./dto/user.dto";
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}

    @Post('/new')
    @ApiOperation({ summary: 'Create user' })
    async create(@Body() createUserDto: UserDto) {
        return await this.usersService.create(createUserDto);
    }
}
