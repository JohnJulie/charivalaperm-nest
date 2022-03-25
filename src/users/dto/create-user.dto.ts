import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {

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
     * A role of user: PARENT or PRO
     */
    @ApiProperty()
    role: string = 'PARENT';
}