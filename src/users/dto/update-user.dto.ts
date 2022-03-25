import { ApiProperty } from "@nestjs/swagger";
import { Exclude } from "class-transformer";
import { UpdateContractDto } from "../../contracts/dto/update-contract.dto";
import { CreateContractDto } from "../../contracts/dto/create-contract.dto";

export class UpdateUserDto {

  @ApiProperty()
  @Exclude()
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
   * A list of contracts
   * @example
   */
  @ApiProperty()
  contracts?: CreateContractDto[] | UpdateContractDto[] = [];

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