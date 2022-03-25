import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, ObjectId } from "mongoose";
import * as mongoose from "mongoose";
import { Transform, Type } from "class-transformer";
import { Slot } from "./slot.schema";

export type ContractDocument = Contract & Document

@Schema()
export class Contract {

    @Transform(({ value }) => value.toString())
    _id: ObjectId;

    @Prop(Date)
    startContract: Date;

    @Prop(Date)
    endContract: Date;

    @Prop({
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: Slot.name }],
    })
    @Type(() => Slot)
    slots: Slot;
}

export const ContractSchema = SchemaFactory.createForClass(Contract);