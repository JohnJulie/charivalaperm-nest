import { Controller, Post, Body, Put, Param, Get } from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { ApiOperation, ApiParam, ApiTags } from "@nestjs/swagger";
import { UpdateUserDto } from "./dto/update-user.dto";

@ApiTags('users')
@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}

    @Get()
    @ApiOperation({ summary: 'Get all users' })
    async findAll() {
        return await this.usersService.findAll();
    }

    @Post()
    @ApiOperation({ summary: 'Create user' })
    async create(@Body() createUserDto: CreateUserDto) {
        return await this.usersService.create(createUserDto);
    }

    @Put(':id')
    @ApiParam({
        name: 'id',
        description: 'Id of user to update',
        allowEmptyValue: false
    })
    @ApiOperation({ summary: 'Update user with contract' })
    async update(@Param() id: string, @Body() updateUserDto: UpdateUserDto) {
        return await this.usersService.update(id, updateUserDto);
    }
}
