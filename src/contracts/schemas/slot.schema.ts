import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, ObjectId } from "mongoose";
import { Transform } from "class-transformer";

export type SlotDocument = Slot & Document

@Schema()
export class Slot {

    @Transform(({ value }) => value.toString())
    _id: ObjectId;

    @Prop(Number)
    dayOfWeek: number;

    @Prop(Date)
    startTime: Date;

    @Prop(Number)
    duration: number;
}

export const SlotSchema = SchemaFactory.createForClass(Slot);