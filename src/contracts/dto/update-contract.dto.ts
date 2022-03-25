import { ApiProperty } from "@nestjs/swagger";
import { CreateSlotDto } from "./create-slot.dto";

export class UpdateContractDto {

  @ApiProperty()
  _id?: string;

  /**
   * Date of the first day of child contract
   * @example "2020-09-01T15:30:00.000Z"
   */
  @ApiProperty()
  startContract: Date;

  /**
   * Date of the last day of child contract
   * @example "2021-07-31T15:30:00.000Z"
   */
  @ApiProperty()
  endContract: Date;

  /**
   * Date of the last day of child contract
   */
  @ApiProperty()
  slots: CreateSlotDto[];
}