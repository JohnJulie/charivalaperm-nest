import {ApiProperty} from "@nestjs/swagger";

export class UserDto {

    @ApiProperty()
    _id?: string;

    /**
     * A username
     * @example 'nomprénom'
     */
    @ApiProperty()
    username: string;

    /**
     * A password
     * @example '1234azerty'
     */
    @ApiProperty()
    password: string;

    /**
     * A list of children firstname
     * @example ['William']
     */
    @ApiProperty()
    children: string[];

    /**
     * A filename of existing avatar
     */
    @ApiProperty()
    avatar: string = 'me.png';

    /**
     * A number between 0 (pro) and 1 (parent)
     */
    @ApiProperty()
    role: number = 1;
}