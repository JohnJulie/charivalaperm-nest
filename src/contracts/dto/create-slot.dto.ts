import {ApiProperty} from "@nestjs/swagger";
import {Prop} from "@nestjs/mongoose";

export class CreateSlotDto {
    /**
     * The number of day week (0: Dimanche, 1: lundi, 2: mardi, ...)
     * @example 1
     */
    @ApiProperty()
    dayOfWeek: number;

    /**
     * The start hour's of permanence
     * @example "2022-03-25T07:45:00.000Z"
     */
    @ApiProperty()
    startTime: Date;

    /**
     * The duration of permanence on minutes
     */
    @Prop(Number)
    duration: number = 180;
}